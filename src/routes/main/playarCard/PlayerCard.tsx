import React, {useEffect} from 'react';
import {MenuBar, RequireLoadable, TransitionBar} from 'components';
import {MenuBarItems} from 'navigation';
import {ID} from 'entities/Common';
import {Text, View} from 'react-native';
import {usePlayerActions} from '../../../state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from '../../../state/entities/State';

interface PlayerCardProps {
  playerId: ID;
}

const PlayerCard: React.FC<PlayerCardProps> = ({playerId}) => {
  const actions = usePlayerActions();

  useEffect(() => {
    actions.fetchPlayer(playerId);
  }, []);

  const {player} = useSelector((state: State) => state);

  return (
    <View>
      <MenuBar leftIcons={[MenuBarItems.Settings]} rightIcons={[MenuBarItems.Friends]} />
      <View style={{flex: 1}}>
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
