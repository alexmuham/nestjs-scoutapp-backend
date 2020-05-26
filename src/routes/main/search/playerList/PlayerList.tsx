import React from 'react';
import {RequireLoadable} from 'components';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import PlayerList from 'components/playerList/PlayerList';

const SearchPlayerList: React.FC = () => {
  const routerActions = useRouterActions();
  const {t} = useTranslation('playerList');

  const {search} = useSelector((state: State) => state);

  return (
    <RequireLoadable data={search}>
      {({players}) => (
        <PlayerList
          players={players}
          title={t('search')}
          mode="search"
          navigateActions={routerActions.navigateToEditProspect}
        />
      )}
    </RequireLoadable>
  );
};

export default SearchPlayerList;
