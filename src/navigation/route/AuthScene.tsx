import React from 'react';
import {Route} from 'react-router-native';
import LogIn from '../../screens/auth/login/LogIn';
import {Registration} from '../../screens/auth';
import ForgotPassword from '../../screens/auth/forgotPassword/ForgotPassword';
import {View} from 'react-native';

const AuthScene: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
    </View>
  );
};

export default AuthScene;
