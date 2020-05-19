import React, {useEffect} from 'react';
import {MenuBar, RequireLoadable, TransitionBar} from 'components';
import {MenuBarItems} from 'navigation';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {useProspectActions, useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import styles from './Prospect.styles';
import {useHistory} from 'react-router';
import PlayerList from 'components/playerList/PlayerList';

const Prospect: React.FC = () => {
  const actions = useProspectActions();
  const routerActions = useRouterActions();
  const {t} = useTranslation('prospect');

  useEffect(() => {
    actions.fetchUserPlayers();
  }, []);

  const {prospect} = useSelector((state: State) => state);
  const history = useHistory();

  return (
    <View style={styles.container}>
      <MenuBar
        leftIcons={[MenuBarItems.Settings(history)]}
        rightIcons={[MenuBarItems.Friends(history)]}
      />
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
      <TransitionBar style={styles.transitionBar} activeProspect />
    </View>
  );
};

export default Prospect;
