import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';
import IAuthManager from '../../managers/auth/IAuthManager';
import {
  extractJwtFromContext,
  extractPlatformHeaderFromContext,
  getRequest,
} from '../RequestExtractors';
import Session from '../../entities/Session';
import ScoutAppError from 'ScoutAppError';
import {processError} from '../utils/ErrorUtils';
import {IgnoreElement} from 'entities/Common';
import {Reflector} from '@nestjs/core';
import {Platform} from 'entities/Platform';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private readonly authManager: IAuthManager,
    private readonly reflector: Reflector,
  ) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  public async intercept(context: ExecutionContext, next: CallHandler) {
    try {
      const ignoreElements = this.getIgnoreElements(context);
      const ignorePlatform = ignoreElements && ignoreElements.includes('Platform');
      const ignoreAuthorization =
        ignoreElements && ignoreElements.includes('Authorization');

      let session: Session | undefined;

      let platform: Platform | undefined;
      if (!ignorePlatform) {
        platform = AuthInterceptor.extractPlatformFromContext(context);
      }

      if (!ignoreAuthorization) {
        const jwt = extractJwtFromContext(context);
        if (jwt) {
          session = await this.authManager.validateSessionOrThrow(jwt);
        }
      }

      if (session) {
        if (!ignorePlatform && (!platform || session.platform !== platform)) {
          throw new ScoutAppError('platform malformed');
        }
      }

      const injectRequestData = (request: any) => {
        if (!ignoreAuthorization) {
          request.session = session;
        }
        if (!ignorePlatform) {
          request.platform = platform;
        }
      };

      const request = getRequest(context);
      if (request) {
        injectRequestData(request);
      }

      return next.handle();
    } catch (e) {
      processError(e);
    }
  }

  private static extractPlatformFromContext(context: ExecutionContext): Platform {
    const platformHeader = extractPlatformHeaderFromContext(context);
    if (!platformHeader) {
      throw new ScoutAppError('platform header is not provided');
    }
    const platform = Platform[platformHeader as Platform];
    if (!platform) {
      throw new ScoutAppError('platform header contains unknown value');
    }
    return platform;
  }

  getIgnoreElements(context: ExecutionContext): IgnoreElement[] | undefined {
    const getIgnoreElementsFunc = (target: Function) =>
      this.reflector.get<IgnoreElement[] | undefined>('ignore', target);
    return [
      //
      getIgnoreElementsFunc(context.getHandler()),
      getIgnoreElementsFunc(context.getClass()),
    ]
      .filter((r) => !!r)
      .shift();
  }
}
