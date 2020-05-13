import React from 'react';
import Player from 'entities/Player';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Item.style';
import {useRouterActions} from 'state/hooks/UseActions';

interface ItemProps {
  player: Player;
}

const Item: React.FC<ItemProps> = ({player}) => {
  const actions = useRouterActions();

  const {name, highSchool, primaryPosition, collegeCommitment, id} = player;

  return (
    <TouchableOpacity onPress={() => actions.navigateToPlayer(id)}>
      <View style={styles.container}>
        <Text>{primaryPosition}</Text>
        <Text>{name}</Text>
        <Text>{highSchool}</Text>
        <Text>{collegeCommitment}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
