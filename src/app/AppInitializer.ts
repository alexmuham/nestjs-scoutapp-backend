import {YellowBox} from 'react-native';
import translations from 'resources/Translations.json';
import Localization from './localization/Localization';
import {AuthInfoKeeper} from 'auth/index';
import {initializeServicesAsync} from 'services';

const setupYellowBox = () => {
  YellowBox.ignoreWarnings([
    'Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated',
    'Warning: componentWillReceiveProps has been renamed, and is not recommended for use',
    'Warning: componentWillMount has been renamed, and is not recommended for use',
    'Warning: DatePickerIOS has been merged with DatePickerAndroid',
    'Require cycle',
  ]);
};

type Options = {stateInitializer: {initStore: () => void}};

let initialized = false;

const initAsync = async (options: Options) => {
  if (initialized) return;
  initialized = true;

  setupYellowBox();

  await Localization.initAsync(translations);

  options.stateInitializer.initStore();

  await AuthInfoKeeper.initialize();

  await initializeServicesAsync();
};

export default {
  initAsync,
};
