import React from 'react';
import Player from 'entities/Player';
import {Text, View, ViewStyle} from 'react-native';
import styles from './PlayerList.styles';
import List from './list/List';

interface PlayerListProps {
  players: Player[];
  title?: string;
  styleContainer?: ViewStyle;
}

const PlayerList: React.FC<PlayerListProps> = ({players, title, styleContainer}) => {
  return (
    <View style={{...styleContainer, ...styles.container}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <List players={players} />
    </View>
  );
};

export default PlayerList;
