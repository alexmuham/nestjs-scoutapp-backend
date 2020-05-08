import ScoutAppError from '../../ScoutAppError';

export enum ScoutAppErrorType {
  TokenExpired,
  AuthFailed,
  RefreshFailed,
  ChangePasswordFailed,
  RestorePasswordFailed,
  JwtPayloadMalformed,
}

export default class ScoutAppAuthError extends ScoutAppError {
  constructor(message: string, public readonly type: ScoutAppErrorType) {
    super(message);
  }
}
