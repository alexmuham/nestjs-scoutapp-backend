import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import IAuthManager from '../../managers/auth/IAuthManager';
import ScoutAppError from '../../ScoutAppError';
import {extractJwtFromContext} from '../RequestExtractors';
import {processError} from '../utils/ErrorUtils';

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(private readonly authManager: IAuthManager) {}

  async canActivate(context: ExecutionContext) {
    try {
      const jwt = extractJwtFromContext(context);
      if (!jwt) {
        throw new ScoutAppError('Authorization token is empty');
      }

      await this.authManager.getSessionFromTokenOrThrow(jwt);
      return true;
    } catch (e) {
      processError(e);
      return false;
    }
  }
}
