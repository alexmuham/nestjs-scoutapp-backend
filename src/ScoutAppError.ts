export enum ScoutAppErrorType {
  TokenExpired,
  AuthFailed,
  RefreshFailed,
  ChangePasswordFailed,
  RestorePasswordFailed,
  JwtPayloadMalformed,
}

export default class ScoutAppError extends Error {
  constructor(public readonly message: string) {
    super(message);
  }
}
