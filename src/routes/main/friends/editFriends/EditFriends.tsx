import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {RequireLoadable, FriedList} from 'components';
import {useFriendsActions, useRouterActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';

const EditFriends: React.FC = () => {
  const {t} = useTranslation('friends');

  const actions = useFriendsActions();
  const routerActions = useRouterActions();

  useEffect(() => {
    actions.fetchFriends();
  }, []);

  const {friends} = useSelector((state) => state);

  return (
    <RequireLoadable data={friends}>
      {({friends}) => (
        <FriedList
          friends={friends}
          title={t('friends')}
          mode="edit"
          editAction={routerActions.goBack}
          deleteAction={actions.deleteFriend}
        />
      )}
    </RequireLoadable>
  );
};

export default EditFriends;
