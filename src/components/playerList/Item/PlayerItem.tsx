import React from 'react';
import Player from 'entities/Player';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './PlayerItem.style';
import {useRouterActions} from 'state/hooks/UseActions';
import * as PlayerList from '../assets/index';

interface ItemProps {
  player: Player;
  number?: number;
}

const PlayerItem: React.FC<ItemProps> = ({player, number}) => {
  const actions = useRouterActions();

  const {name, primaryPosition, graduatingClass, id} = player;

  return (
    <TouchableOpacity
      onPress={() => actions.navigateToPlayer(id)}
      style={styles.container}
    >
      <View style={styles.player}>
        <Image style={styles.star} source={PlayerList.Star} />
        <Text style={styles.number}>{number}.</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{primaryPosition}</Text>
        <Text style={styles.team}>Team</Text>
        <Text style={styles.class}>{graduatingClass}</Text>
        <Text style={styles.commited}>Commited</Text>
        <Text style={styles.rating}>OFP</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerItem;
