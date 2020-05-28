import {Session, ID, Platform, AuthResponse} from 'entities';

export default abstract class IAuthManager {
  abstract register(
    platform: Platform,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
  ): Promise<AuthResponse>;

  abstract login(
    platform: Platform,
    email: string,
    password: string,
  ): Promise<AuthResponse>;

  abstract getSessionFromTokenOrThrow(jwt: string): Promise<Session>;

  abstract validateSessionOrThrow(jwt: string): Promise<Session>;

  abstract refresh(refreshToken: string): Promise<AuthResponse>;

  abstract recoverPassword(email: string): Promise<void>;

  abstract async changePassword(
    userId: ID,
    oldPassword: string,
    password: string,
  ): Promise<void>;

  abstract updateFirebaseToken(token: string, registrationId: string): Promise<void>;
}
