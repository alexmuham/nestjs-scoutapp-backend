import React, {useEffect, useState} from 'react';
import {RequireLoadable} from 'components';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {useTranslation} from 'react-i18next';
import PlayerList from 'components/playerList/PlayerList';
import {usePlayerActions, useSettingsActions} from 'state/hooks/UseActions';

const SearchPlayerList: React.FC = () => {
  const {t} = useTranslation('playerList');
  const [playersIds, setPlayersIds] = useState<string[]>([]);
  const actions = usePlayerActions();
  const preferenceActions = useSettingsActions();

  useEffect(() => {
    preferenceActions.fetchPreferences();
  }, []);

  const {search, preferences} = useSelector((state: State) => state);

  return (
    <RequireLoadable data={preferences}>
      {(
        preferences, // TODO FIXED
      ) => (
        <RequireLoadable data={search}>
          {({players}) => (
            <PlayerList
              players={players}
              title={t('search')}
              editAction={() => undefined}
              playersIds={playersIds}
              setPlayersIds={setPlayersIds}
              mode="search"
              addAction={actions.addPlayerToUser}
              deleteAction={actions.deletePlayerFromUser}
              yourPlayersIds={preferences.players}
            />
          )}
        </RequireLoadable>
      )}
    </RequireLoadable>
  );
};

export default SearchPlayerList;
