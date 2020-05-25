import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RequireLoadable, FriedList} from 'components';
import {useFriendsActions, useRouterActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {Modal, View} from 'react-native';
import {Invite} from '../popUp';
import {Route} from 'react-router-native';
import styles from './Friends.styles';

const Friends: React.FC = () => {
  const {t} = useTranslation('friends');

  const actions = useFriendsActions();
  const routerActions = useRouterActions();

  const [searchValue, setSearch] = useState<string>('');

  useEffect(() => {
    actions.fetchFriends();
  }, []);

  const {friends} = useSelector((state) => state);

  return (
    <View style={styles.flexOne}>
      <RequireLoadable data={friends}>
        {({friends}) => (
          <>
            <FriedList
              friends={friends}
              title={t('friends')}
              mode="list"
              navigateActions={() => routerActions.navigateToEditFriends()}
              inviteAction={() => routerActions.navigateToInvitePopUp()}
              massageActions={routerActions.navigateToMassage}
              searchValue={searchValue}
              onChangeText={setSearch}
              placeholder={t('search')}
            />
            <Route path="/main/friends/invite">
              <Modal animationType="fade" transparent>
                <Invite />
              </Modal>
            </Route>
          </>
        )}
      </RequireLoadable>
    </View>
  );
};

export default Friends;
