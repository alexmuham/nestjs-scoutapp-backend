import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RequireLoadable, FriedList} from 'components';
import {useFriendsActions, useRouterActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {View} from 'react-native';
import styles from '../Friends.styles';

const EditFriends: React.FC = () => {
  const {t} = useTranslation('friends');
  const [searchValue, setSearch] = useState<string>('');

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
            mode="edit"
            editAction={routerActions.goBack}
            deleteAction={actions.deleteFriend}
            searchValue={searchValue}
            onChangeText={setSearch}
            placeholder={t('search')}
          />
        )}
      </RequireLoadable>
    </View>
  );
};

export default EditFriends;
