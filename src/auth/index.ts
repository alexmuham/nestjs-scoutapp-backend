import IAuthInfoKeeper, {
  AuthInfoKeeperDelegate,
} from '@spryrocks/react-auth/IAuthInfoKeeper';
import AuthInfoKeeper from '@spryrocks/react-auth/AuthInfoKeeper';
import {ScoutApiTokenHolder} from 'api';
import LegacyStorage from '@react-native-community/async-storage-backend-legacy';

const delegate: AuthInfoKeeperDelegate = {
  setToken: (accessToken) => ScoutApiTokenHolder.setToken(accessToken),
};

const legacyStorage = new LegacyStorage();

const authInfoKeeper: IAuthInfoKeeper = new AuthInfoKeeper(delegate, legacyStorage);

export {authInfoKeeper as AuthInfoKeeper};
