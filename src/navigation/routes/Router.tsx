import React from 'react';
import {NativeRouter, Redirect, Route, Switch, MemoryRouter} from 'react-router-native';
import AppRoute from './AppRoute';
import Auth from 'screens/auth';
import Main from 'screens';
import Layout from '../layouts';
import {View} from 'react-native';

const Router: React.FC = () => {
  const {AuthLayout} = Layout;
  const {MainLayout} = Layout;
  return (
    <MemoryRouter>
      <NativeRouter>
        <View style={{flex: 1}}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
          <AppRoute exact path="/main" component={Auth.Welcome} layout={AuthLayout} />
          <AppRoute
            exact
            path="/registration"
            component={Auth.Registration}
            layout={AuthLayout}
          />
          <AppRoute
            exact
            path="/forgotPassword"
            component={Auth.ForgotPassword}
            layout={AuthLayout}
          />
          <AppRoute exact path="/login" component={Auth.LogIn} layout={AuthLayout} />
          <AppRoute
            exact
            path="/player"
            component={Main.PlayerCard}
            layout={MainLayout}
          />
        </View>
      </NativeRouter>
    </MemoryRouter>
  );
};

export default Router;
