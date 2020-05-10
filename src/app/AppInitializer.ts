import {YellowBox} from 'react-native';
import translations from 'resources/Translations.json';
import Localization from './localization/Localization';
import {AuthInfoKeeper} from 'auth/index';
import {initializeServicesAsync} from 'services';
import StateInitializer from '../state/StateInitializer';
import {rootReducer, rootSaga} from '../state/ducks';

const setupYellowBox = () => {
  YellowBox.ignoreWarnings([
    'Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated',
    'Warning: componentWillReceiveProps has been renamed, and is not recommended for use',
    'Warning: componentWillMount has been renamed, and is not recommended for use',
    'Warning: DatePickerIOS has been merged with DatePickerAndroid',
    'Require cycle',
  ]);
};

let initialized = false;

const initAsync = async () => {
  if (initialized) return;
  initialized = true;

  setupYellowBox();

  await Localization.initAsync(translations);

  await StateInitializer.createStore(rootReducer, rootSaga);

  await AuthInfoKeeper.initialize();

  await initializeServicesAsync();
};

export default {
  initAsync,
};
