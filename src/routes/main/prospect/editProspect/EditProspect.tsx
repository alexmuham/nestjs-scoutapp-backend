import React, {useEffect, useState} from 'react';
import {RequireLoadable} from 'components';
import {View} from 'react-native';
import PlayerList from 'components/playerList/PlayerList';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {useProspectActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import styles from './EsitProspect.styles';
import {useGuard} from 'state/hooks/UseGuard';

const EditProspect: React.FC = () => {
  const actions = useProspectActions();
  const [playersIds, setPlayersIds] = useState<string[]>([]);
  const {t} = useTranslation('prospect');

  useGuard({requireAuthenticated: true});

  useEffect(() => {
    actions.fetchUserPlayers();
  }, []);

  const {prospect} = useSelector((state: State) => state);

  return (
    <View style={styles.container}>
      <RequireLoadable data={prospect}>
        {({players}) => (
          <PlayerList
            players={players}
            title={t('prospect')}
            editAction={() => actions.deletePlayers(playersIds)}
            playersIds={playersIds}
            setPlayersIds={setPlayersIds}
            mode="edit"
          />
        )}
      </RequireLoadable>
    </View>
  );
};

export default EditProspect;
