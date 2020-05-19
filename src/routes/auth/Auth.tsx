import Registration from './registration/Registration';
import LogIn from './login/LogIn';
import ForgotPassword from './forgotPassword/ForgotPassword';
import {Route} from 'react-router-native';
import React from 'react';
import {View} from 'react-native';
import styles from './Auth.styles';

const Auth: React.FC = () => {
  return (
    <View style={styles.container}>
      <Route exact path="/auth">
        <LogIn />
      </Route>
      <Route exact path="/auth/registration">
        <Registration />
      </Route>
      <Route exact path="/auth/forgotPassword">
        <ForgotPassword />
      </Route>
      <Route exact path="/auth/login">
        <LogIn />
      </Route>
    </View>
  );
};

export default Auth;
