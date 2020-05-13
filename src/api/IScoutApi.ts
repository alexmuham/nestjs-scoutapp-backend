import Session from 'auth/Session';
import RegisterRequest from './entities/RegisterRequest';
import LoginRequest from './entities/LoginRequest';
import {Account} from 'entities/Account';
import ForgotPasswordRequest from 'api/entities/ForgotPasswordRequest';
import UpdateFirebaseTokenRequest from 'api/entities/UpdateFirebaseTokenRequest';
import Player from 'entities/Player';

export interface IScoutApi {
  register(request: RegisterRequest): Promise<Session>;
  login(request: LoginRequest): Promise<Session>;
  myAccount(): Promise<Account>;
  forgotPassword(request: ForgotPasswordRequest): Promise<void>;
  updateFirebaseToken(request: UpdateFirebaseTokenRequest): Promise<void>;
  getPlayerById(playerId: string): Promise<Player>;
  getPlayers(): Promise<Player[]>;
}
