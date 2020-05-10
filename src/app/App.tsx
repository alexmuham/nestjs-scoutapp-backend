import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import AppDebugHeader from 'app/debug/AppDebugHeader';
import {getBuildType} from '../services/config/ConfigUtils';
import {getStore} from '../state';
import BuildType from '../entities/BuildType';
import AppLoading from './AppLoading';
import AppInitializer from './AppInitializer';
import {logError} from '../utils/Logger';
import Router from '../navigation/route/Router';

const App: React.FC = () => {
  const buildType = getBuildType();
  const isDebug = buildType !== BuildType.Production;

  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={async () => {
          await AppInitializer.initAsync();
        }}
        onFinish={() => setIsReady(true)}
        onError={logError}
      />
    );
  }

  return (
    <Provider store={getStore()}>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
      {isDebug && <AppDebugHeader buildType={buildType} />}
    </Provider>
  );
};

export default App;
