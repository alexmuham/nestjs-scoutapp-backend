import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {RequireLoadable, FriedList} from 'components';
import {useFriendsActions, useRouterActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {Modal, View} from 'react-native';
import {FriendAct, Invite} from '../popUp';
import {Route} from 'react-router-native';
import styles from './Friends.styles';

const Friends: React.FC = () => {
  const {t} = useTranslation('friends');

  const actions = useFriendsActions();
  const routerActions = useRouterActions();

  useEffect(() => {
    actions.fetchFriends();
  }, []);

  const {friends} = useSelector((state) => state);

  return (
    <View style={styles.flexOne}>
      <RequireLoadable data={friends}>
        {({friends}) => (
          <FriedList
            friends={friends}
            title={t('friends')}
            mode="list"
            navigateActions={() => routerActions.navigateToEditFriends()}
            inviteAction={() => routerActions.navigateToInvitePopUp()}
            friendActAction={routerActions.navigateToFriendActPopUp}
          />
        )}
      </RequireLoadable>
      <Route path="/main/friends/invite">
        <Modal presentationStyle="overFullScreen" animationType="slide" transparent>
          <Invite />
        </Modal>
      </Route>
      <Route path="/main/friends/friendAct:id">
        <Modal presentationStyle="overFullScreen" animationType="slide" transparent>
          <FriendAct />
        </Modal>
      </Route>
    </View>
  );
};

export default Friends;
