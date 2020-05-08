import ScoutApi from './ScoutApi';
import {IScoutApi} from './IScoutApi';
import IScoutApiTokenHolders from './IScoutApiTokenHolders';
import ScoutApiTokenHolders from './ScoutApiTokenHolders';
import {createConfiguration} from './ApiConfiguration';

const scoutApi: IScoutApi = new ScoutApi(createConfiguration());

const scoutApiTokenHolders: IScoutApiTokenHolders = new ScoutApiTokenHolders();

export {scoutApi as ScoutApi, scoutApiTokenHolders as ScoutApiTokenHolders};
