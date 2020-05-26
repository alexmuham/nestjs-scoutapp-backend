import Registration from './registration/Registration';
import LogIn from './login/LogIn';
import ForgotPassword from './forgotPassword/ForgotPassword';
import {Route} from 'react-router-native';
import React from 'react';
import {useGuard} from 'state/hooks/UseGuard';

const Auth: React.FC = () => {
  useGuard({requireAuthenticated: false});

  return (
    <>
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
    </>
  );
};

export default Auth;
