import PlayerCard from './playarCard/PlayerCard';
import Prospect from './prospect/Prospect';
import EditProspect from './prospect/editProspect/EditProspect';
import Settings from './settings/Settings';
import React from 'react';
import styles from './Main.styles';
import {MenuBar, TransitionBar} from '../../components';
import {MenuBarItems} from '../../navigation';
import {View} from 'react-native';
import {Route, useHistory, Redirect} from 'react-router';

const Main: React.FC = () => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <MenuBar
        leftIcons={[MenuBarItems.Friends(history)]}
        rightIcons={[MenuBarItems.Settings(history)]}
      />

      <Route exact path="/main">
        <Redirect to="/main/prospect" />
      </Route>

      <Route exact path="/main/prospect">
        <Prospect />
      </Route>
      <Route exact path="main/prospect/edit">
        <EditProspect />
      </Route>
      <Route exact path="/main/player:id">
        <PlayerCard />
      </Route>
      <Route exact path="/main/settings">
        <Settings />
      </Route>

      <TransitionBar activeProspect />
    </View>
  );
};

export default Main;
