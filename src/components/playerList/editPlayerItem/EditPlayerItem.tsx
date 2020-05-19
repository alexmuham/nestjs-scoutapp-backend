import React, {useState} from 'react';
import Player from 'entities/Player';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../playerItem/PlayerItem.style';
import * as PlayerList from '../assets/index';

interface EditItemProps {
  player: Player;
  number?: number;
  playersIds?: string[];
  setPlayersIds?: (playersIds: string[]) => void;
  starValue: boolean;
}

const EditPlayerItem: React.FC<EditItemProps> = ({
  player,
  number,
  playersIds,
  setPlayersIds,
  starValue,
}) => {
  const {name, primaryPosition, graduatingClass, id} = player;
  const [star, useStar] = useState<boolean>(starValue);

  return (
    <TouchableOpacity
      onPress={() => {
        if (playersIds && setPlayersIds) {
          if (playersIds.every((player) => player !== id)) {
            playersIds.push(id);
            setPlayersIds(playersIds);
            useStar(!star);
          } else {
            setPlayersIds(playersIds.filter((playerId) => playerId !== id));
            useStar(!star);
          }
        }
      }}
      style={styles.container}
    >
      <View style={styles.player}>
        {star ? (
          <Image style={styles.star} source={PlayerList.Star} />
        ) : (
          <Image style={styles.star} source={PlayerList.EmptyStar} />
        )}
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

export default EditPlayerItem;
