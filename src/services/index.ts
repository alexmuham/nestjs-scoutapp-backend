import IFirebaseMessagingService from './IFirebaseMessagingService';
import FirebaseMessagingService from './FirebaseMessagingService';
import IConfigService from './config/IConfigService';
import ConfigService from './config/ConfigService';
import {getNodeEnv} from './config/ConfigUtils';
import IAlertService from './IAlertService';
import AlertService from './AlertService';

const firebaseMessagingServiceInstance = new FirebaseMessagingService();
const firebaseMessagingService: IFirebaseMessagingService = firebaseMessagingServiceInstance;

const alertService: IAlertService = new AlertService();

const configService: IConfigService = new ConfigService(getNodeEnv());

export {
  //
  firebaseMessagingService as FirebaseMessagingService,
  configService as ConfigService,
  alertService as AlertService,
};

export const initializeServicesAsync = async () => {
  await firebaseMessagingServiceInstance.initialize();
};
