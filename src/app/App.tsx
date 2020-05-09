import React from 'react';
import {Provider} from 'react-redux';
import {getStore} from 'state';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Text, View} from 'react-native';
import {Registration} from '../screens/auth';
import LogIn from '../screens/auth/login/LogIn';
import ForgotPassword from '../screens/auth/forgotPassword/ForgotPassword';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import {getBuildType} from 'services/config/ConfigUtils';
import BuildType from 'entities/BuildType';
import AppDebugHeader from 'app/debug/AppDebugHeader';

const App: React.FC = () => {
  const buildType = getBuildType();
  const isDebug = buildType !== BuildType.Production;

  return (
    <Provider store={getStore()}>
      <I18nextProvider i18n={i18n}>
        <NativeRouter>
          <View>
            <View>
              <Link to="/" underlayColor="#f0f4f7">
                <Text>LogIn</Text>
              </Link>
              <Link to="/registration" underlayColor="#f0f4f7">
                <Text>Registration</Text>
              </Link>
              <Link to="/forgotPassword" underlayColor="#f0f4f7">
                <Text>ForgotPassword</Text>
              </Link>
            </View>

            <Route exact path="/" component={LogIn} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
          </View>
        </NativeRouter>
      </I18nextProvider>
      {isDebug && <AppDebugHeader buildType={buildType} />}
    </Provider>
  );
};

export default App;
