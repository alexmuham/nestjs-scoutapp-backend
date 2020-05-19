import React, {useEffect} from 'react';
import {MenuBar, RequireLoadable, TransitionBar} from 'components';
import {MenuBarItems} from 'navigation';
import {Text, View} from 'react-native';
import {usePlayerActions} from 'state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import styles from './PlayerCard.styles';
import {useHistory} from 'react-router';
import {useParams} from 'react-router-native';

const PlayerCard: React.FC = () => {
  const actions = usePlayerActions();

  const {id} = useParams();

  useEffect(() => {
    actions.fetchPlayer(id);
  }, []);

  const {player} = useSelector((state: State) => state);
  const history = useHistory();

  return (
    <View>
      <MenuBar
        leftIcons={[MenuBarItems.Settings(history)]}
        rightIcons={[MenuBarItems.Friends(history)]}
      />
      <RequireLoadable data={player}>
        {({player}) => {
          return (
            <View style={styles.container}>
              <Text>{player.name}</Text>
            </View>
          );
        }}
      </RequireLoadable>
      <TransitionBar />
    </View>
  );
};

export default PlayerCard;
