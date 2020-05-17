import React, {useEffect} from 'react';
import {MenuBar, RequireLoadable, TransitionBar} from 'components';
import {MenuBarItems} from 'navigation';
import {ID} from 'entities/Common';
import {Text, View} from 'react-native';
import {usePlayerActions} from 'state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import styles from './PlayerCard.styles';
import {useHistory} from 'react-router';

interface PlayerCardProps {
  playerId: ID;
}

const PlayerCard: React.FC<PlayerCardProps> = ({playerId}) => {
  const actions = usePlayerActions();

  useEffect(() => {
    actions.fetchPlayer(playerId);
  }, []);

  const {player} = useSelector((state: State) => state);
  const history = useHistory();

  return (
    <View>
      <MenuBar
        leftIcons={[MenuBarItems.Settings(history)]}
        rightIcons={[MenuBarItems.Friends(history)]}
      />
      <View style={styles.container}>
        <RequireLoadable data={player}>
          {(data) => (
            <>
              <Text>{data.name}</Text>
            </>
          )}
        </RequireLoadable>
      </View>
      <TransitionBar />
    </View>
  );
};

export default PlayerCard;
