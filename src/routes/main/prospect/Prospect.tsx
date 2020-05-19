import React, {useEffect} from 'react';
import {RequireLoadable} from 'components';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {useProspectActions, useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import PlayerList from 'components/playerList/PlayerList';

const Prospect: React.FC = () => {
  const actions = useProspectActions();
  const routerActions = useRouterActions();
  const {t} = useTranslation('prospect');

  useEffect(() => {
    actions.fetchUserPlayers();
  }, []);

  const {prospect} = useSelector((state: State) => state);

  return (
    <RequireLoadable data={prospect}>
      {({players}) => (
        <PlayerList
          players={players}
          title={t('prospect')}
          mode="list"
          navigateActions={routerActions.navigateToEditProspect}
        />
      )}
    </RequireLoadable>
  );
};

export default Prospect;
