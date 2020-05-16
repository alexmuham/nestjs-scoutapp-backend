import React, {useEffect} from 'react';
import {MenuBar, TransitionBar} from 'components';
import {MenuBarItems} from 'navigation';
import {View} from 'react-native';
import PlayerList from '../../../components/playerList/PlayerList';
import {useHistory} from 'react-router-native';
import {useSelector} from 'react-redux';
import State from '../../../state/entities/State';
import {useProspectActions} from '../../../state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import styles from './Prospect.styles';
import {AuthInfoKeeper} from 'auth';

const Prospect: React.FC = () => {
  const history = useHistory();
  const actions = useProspectActions();
  const {t} = useTranslation('prospect');

  useEffect(() => {
    AuthInfoKeeper.isAuthenticated().then((isAuthenticated) => {
      if (!isAuthenticated) {
        history.push('/auth');
      }
    });
  }, []);

  useEffect(() => {
    actions.fetchPlayers();
  }, []);

  const {players} = useSelector((state: State) => state);

  return (
    <View style={styles.container}>
      <MenuBar leftIcons={[MenuBarItems.Settings]} rightIcons={[MenuBarItems.Friends]} />
      <PlayerList players={players} title={t('prospect')} />
      <TransitionBar style={styles.transitionBar} activeProspect />
    </View>
  );
};

export default Prospect;
