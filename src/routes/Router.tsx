import React, {useEffect} from 'react';
import {NativeRouter, Redirect, Route, Switch, MemoryRouter} from 'react-router-native';
import Auth from 'routes/auth/Auth';
import Main from 'routes/main/Main';
import {View} from 'react-native';
import {useAuthActions} from '../state/hooks/UseActions';
import styles from './Router.styles';

const Logout = () => {
  const actions = useAuthActions();
  useEffect(() => {
    actions.logout();
  }, []);
  return <></>;
};

const Router: React.FC = () => {
  return (
    <MemoryRouter>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/auth" />
            </Route>
            <Route exact path="/auth/logout">
              <Logout />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
          </Switch>
        </View>
      </NativeRouter>
    </MemoryRouter>
  );
};

export default Router;
