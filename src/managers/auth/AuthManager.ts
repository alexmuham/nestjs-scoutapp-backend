import IAuthManager from './IAuthManager';
import AuthResponse from '../../entities/AuthResponse';
import IUserStore from 'database/stores/user/IUserStore';
import {Injectable} from '@nestjs/common';
import ILoginStore from 'database/stores/login/ILoginStore';
import * as bcrypt from 'bcrypt';
import DbUser from 'database/entities/User';
import LocalLogin from 'database/entities/LocalLogin';
import ISessionStore from 'database/stores/session/ISessionStore';
import Session from 'database/entities/Session';
import {IJwtService} from './jwt/IJwtService';
import {JwtPayload} from './jwt/JwtPayload';
import {pbkdf2Sync, randomBytes} from 'crypto';
import AppSession from 'entities/Session';
import ScoutAppAuthError, {ScoutAppErrorType} from './ScoutAppAuthError';
import {generate as generatePassword} from 'generate-password';
import {ID} from 'entities/Common';
import {Platform} from 'entities/Platform';
import ScoutAppError from '../../ScoutAppError';

@Injectable()
export default class AuthManager extends IAuthManager {
  constructor(
    private readonly userStore: IUserStore,
    private readonly loginStore: ILoginStore,
    private readonly sessionStore: ISessionStore,
    private readonly jwtService: IJwtService,
  ) {
    super();
  }

  async register(
    platform: Platform,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
  ): Promise<AuthResponse> {
    // if (await this.loginStore.findLocalLoginByEmail(email)) {
    //   throw new ScoutAppError('User with the same email already exists');
    // }

    const user = await this.userStore.createUser({
      firstName,
      email,
      allowNotifications: true,
      lastName,
      phoneNumber,
      education,
    });
    const login = await this.createLocalLogin(user, email, password);
    return this.createSession(login.user, platform);
  }

  async login(platform: Platform, email: string, password: string) {
    const login = await this.findLoginOrThrow({email}, ScoutAppErrorType.AuthFailed);

    await AuthManager.checkPasswordOrThrow(login, password, ScoutAppErrorType.AuthFailed);
    return this.createSession(login.user, platform);
  }

  private static async checkPasswordOrThrow(
    login: LocalLogin,
    password: string,
    errorType: ScoutAppErrorType,
  ) {
    if (!(await AuthManager.isPasswordValid(login, password))) {
      throw new ScoutAppAuthError('Password is not valid', errorType);
    }
  }

  private async findLoginOrThrow(
    user: {email?: string; id?: ID},
    errorType: ScoutAppErrorType,
  ): Promise<LocalLogin> {
    let login;
    if (user.email) {
      login = await this.loginStore.getLocalLoginByEmail(user.email);
    } else if (user.id) {
      login = await this.loginStore.getLocalLoginByUser({id: user.id});
    }

    if (!login) {
      throw new ScoutAppAuthError('Login not found', errorType);
    }

    return login;
  }

  private async createLocalLogin(user: DbUser, email: string, password: string) {
    const passwordHash = await AuthManager.createPasswordHash(password);

    return this.loginStore.createLocalLogin(user, email, passwordHash);
  }

  private static async createPasswordHash(password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  private static async isPasswordValid(login: LocalLogin, password: string) {
    return bcrypt.compare(password, login.passwordHash);
  }

  private static createCryptoToken(): string {
    const tmp = randomBytes(32).toString('hex');
    return pbkdf2Sync(tmp, tmp, 2048, 32, 'sha512').toString('hex');
  }

  private async createSession(user: DbUser, platform: Platform): Promise<AuthResponse> {
    return this.createSessionInfo(platform, user, (token, refreshToken) =>
      this.sessionStore.createSession(user, token, refreshToken, platform),
    );
  }

  public async refresh(refreshToken: string) {
    const session = await this.sessionStore.getSessionByRefreshToken(refreshToken);
    if (!session) {
      throw new ScoutAppAuthError('Session not found', ScoutAppErrorType.RefreshFailed);
    }
    return this.createSessionInfo(
      session.platform,
      session.user,
      (token: string, refreshToken: string) =>
        this.sessionStore.updateSession(session, token, refreshToken),
    );
  }

  private async createSessionInfo(
    platform: Platform,
    user: DbUser,
    createOrUpdateSession: (token: string, refreshToken: string) => Promise<Session>,
  ) {
    const token = AuthManager.createCryptoToken();
    const refreshToken = AuthManager.createCryptoToken();
    const session = await createOrUpdateSession(token, refreshToken);
    if (!session) {
      throw new ScoutAppError('Session wasn`t created!');
    }
    const payload: JwtPayload = {
      userId: user.id,
      sessionToken: session.token,
      platform: Platform[platform],
    };
    const jwt = await this.jwtService.sign(payload);
    return {jwt, refreshToken};
  }

  async getSessionFromTokenOrThrow(jwt: string) {
    try {
      const {
        userId,
        sessionToken,
        platform: platformString,
      } = await this.jwtService.verify(jwt);

      const platform = Platform[platformString as Platform];
      if (!platform)
        throw new ScoutAppAuthError(
          'JWT payload should contains a valid platform',
          ScoutAppErrorType.JwtPayloadMalformed,
        );

      const session: AppSession = {
        token: sessionToken,
        userId,
        platform,
      };

      return session;
    } catch (e) {
      if (e.message === 'jwt expired') {
        throw new ScoutAppAuthError('JWT token expired', ScoutAppErrorType.TokenExpired);
      }
      throw new ScoutAppError(e.message);
    }
  }

  async validateSessionOrThrow(jwt: string) {
    const session = await this.getSessionFromTokenOrThrow(jwt);

    const dbSession = await this.sessionStore.getSessionByToken(session.token);
    if (!dbSession)
      throw new ScoutAppAuthError('Session not found', ScoutAppErrorType.AuthFailed);
    if (dbSession.user.id !== session.userId)
      throw new ScoutAppAuthError('User malformed', ScoutAppErrorType.AuthFailed);

    return session;
  }

  private static generateNewPassword() {
    return generatePassword({
      length: 10,
      numbers: true,
      symbols: true,
      uppercase: true,
    });
  }

  async recoverPassword(email: string) {
    const login = await this.findLoginOrThrow(
      {email},
      ScoutAppErrorType.RestorePasswordFailed,
    );

    const password = AuthManager.generateNewPassword();

    this.updatePassword(login, password);
  }

  async updatePassword(login: LocalLogin, password: string) {
    const passwordHash = await AuthManager.createPasswordHash(password);
    await this.loginStore.updateLocalLoginPassword(login, passwordHash);
  }

  async changePassword(userId: ID, oldPassword: string, password: string) {
    const login = await this.findLoginOrThrow(
      {id: userId},
      ScoutAppErrorType.ChangePasswordFailed,
    );

    await AuthManager.checkPasswordOrThrow(
      login,
      oldPassword,
      ScoutAppErrorType.ChangePasswordFailed,
    );

    await this.updatePassword(login, password);
  }

  async updateFirebaseToken(token: string, registrationId: string) {
    const session = await this.sessionStore.getSessionByTokenOrThrow(token);
    await this.sessionStore.updateFirebaseToken(session, registrationId);
  }
}
