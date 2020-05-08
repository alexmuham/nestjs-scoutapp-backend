import {createParamDecorator} from '../utils/DecoratorUtils';
import {Platform} from 'entities/Platform';

export interface HttpRequestInfo {
  baseUrl: string;
  platform: Platform;
}

export default createParamDecorator(
  (request): HttpRequestInfo => {
    const baseUrl = `${request.protocol}://${request.get('Host')}`;

    return {
      baseUrl,
      platform: request.platform,
    };
  },
);
