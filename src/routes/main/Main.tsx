import React from 'react';
import styles from './Main.styles';
import {MenuBar, TransitionBar} from 'components';
import {MenuBarItems} from 'navigation';
import {View} from 'react-native';
import {Route, useHistory, Redirect} from 'react-router';
import {
  Prospect,
  Settings,
  PlayerCard,
  EditProspect,
  Friends,
  Search,
  EditFriends,
  Massage,
  Notifications,
  SearchPlayerList,
} from 'routes/main';
import {useGuard} from 'state/hooks/UseGuard';

const Main: React.FC = () => {
  const history = useHistory();
  useGuard({requireAuthenticated: true});
  return (
    <View style={styles.container}>
      <MenuBar
        leftIcons={[MenuBarItems.Settings(history)]}
        rightIcons={[MenuBarItems.Friends(history)]}
      />

      <Route exact path="/main">
        <Redirect to="/main/prospect" />
      </Route>

      <Route exact path="/main/prospect">
        <Prospect />
      </Route>
      <Route exact path="/main/prospect/edit">
        <EditProspect />
      </Route>
      <Route path="/main/player:id">
        <PlayerCard />
      </Route>
      <Route exact path="/main/settings">
        <Settings />
      </Route>
      <Route exact path="/main/friendsEdit">
        <EditFriends />
      </Route>
      <Route path="/main/friends">
        <Friends />
      </Route>
      <Route exact path="/main/friends/massage:id">
        <Massage />
      </Route>
      <Route exact path="/main/search">
        <Search />
      </Route>
      <Route exact path="/main/search/playerList">
        <SearchPlayerList />
      </Route>
      <Route exact path="/main/notifications">
        <Notifications />
      </Route>
      <TransitionBar activeProspect />
    </View>
  );
};

export default Main;
