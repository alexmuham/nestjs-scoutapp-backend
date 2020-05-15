import React, {useEffect} from 'react';
import {NativeRouter, Redirect, Route, Switch, MemoryRouter} from 'react-router-native';
import AppRoute from './AppRoute';
import Auth from 'routes/auth';
import Main from 'routes/main';
import Layout from '../navigation/layouts';
import {View} from 'react-native';
import {useAuthActions} from '../state/hooks/UseActions';

const Logout = () => {
  const actions = useAuthActions();
  useEffect(() => {
    actions.logout();
  }, []);
  return <></>;
};

const Router: React.FC = () => {
  const {AuthLayout} = Layout;
  const {MainLayout} = Layout;
  return (
    <MemoryRouter>
      <NativeRouter>
        <View style={{flex: 1}}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/auth" />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/main">
              <Redirect to="/prospect" />
            </Route>
          </Switch>
          <AppRoute
            exact
            path="/auth"
            component={Auth.LogIn}
            layout={Layout.AuthLayout}
          />
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
            path="/prospect"
            component={Main.Prospect}
            layout={MainLayout}
          />
          <AppRoute
            exact
            path="/player:id"
            component={Main.PlayerCard}
            layout={MainLayout}
          />
        </View>
      </NativeRouter>
    </MemoryRouter>
  );
};

export default Router;
