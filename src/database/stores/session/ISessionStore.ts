import {Session} from 'database/entities';
import {ID, Platform} from 'entities';

export default abstract class ISessionStore {
  abstract createSession(
    user: {id: string},
    token: string,
    refreshToken: string,
    platform: Platform,
  ): Promise<Session>;

  abstract getSession(session: {id: string}): Promise<Session | undefined>;

  abstract getSessionOrFail(sessionId: ID): Promise<Session>;

  abstract getSessionByToken(token: string): Promise<Session | undefined>;

  abstract getSessionByTokenOrThrow(token: string): Promise<Session>;

  abstract getSessionByRefreshToken(refreshToken: string): Promise<Session | undefined>;

  abstract updateSession(
    session: {id: string},
    token: string,
    refreshToken: string,
  ): Promise<Session>;

  abstract updateFirebaseToken(
    session: {id: string},
    registrationId: string,
  ): Promise<void>;

  abstract getUserFirebaseTokens(userId: ID): Promise<string[]>;

  abstract getUsersFirebaseTokens(userId: ID[]): Promise<string[]>;
}
