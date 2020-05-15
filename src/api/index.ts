import ScoutApi from './ScoutApi';
import {IScoutApi} from './IScoutApi';
import {createConfiguration} from './ApiConfiguration';
import IApiTokenHolder from '@spryrocks/react-api/IApiTokenHolder';
import ApiTokenHolder from '@spryrocks/react-api/ApiTokenHolder';
import ApiDelegate from '@spryrocks/react-api/ApiDelegate';
import {getHeaders} from './ScoutApiUtils';
import {AuthInfoKeeper} from '../auth';

const tokenHolder: IApiTokenHolder = new ApiTokenHolder();

const delegate: ApiDelegate = {
  getHeaders,
  getAuthInfo: async () => {
    const authInfo = await AuthInfoKeeper.getAuthInfo();
    if (!authInfo) return undefined;

    return {
      accessToken: authInfo.jwt,
      refreshToken: authInfo.refreshToken,
    };
  },
  updateAuthInfo: async (authInfo) => {
    await AuthInfoKeeper.update({
      jwt: authInfo.accessToken,
      refreshToken: authInfo.refreshToken,
    });
  },
};

const scoutApi: IScoutApi = new ScoutApi(createConfiguration(), delegate, tokenHolder);

export {scoutApi as ScoutApi, tokenHolder as ScoutApiTokenHolder};
