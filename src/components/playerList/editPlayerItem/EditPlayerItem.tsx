import React, {useState} from 'react';
import Player from 'entities/Player';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './EditPlayerItem.style';
import * as PlayerList from '../assets/index';
import {useRouterActions} from 'state/hooks/UseActions';

interface EditItemProps {
  player: Player;
  number?: number;
  playersIds?: string[];
  setPlayersIds?: (playersIds: string[]) => void;
  mode: 'list' | 'edit' | 'search';
  starValue?: boolean;
  deleteAction?: (playerId: string) => void;
  addAction?: (playerId: string) => void;
  yourPlayersIds?: string[];
}

const EditPlayerItem: React.FC<EditItemProps> = ({
  player,
  number,
  playersIds,
  setPlayersIds,
  mode,
  starValue,
  addAction,
  deleteAction,
  yourPlayersIds,
}) => {
  const {name, primaryPosition, graduatingClass, id, collegeCommitment} = player;
  const routerActions = useRouterActions();

  const [starEdit, setStartEdit] = useState<boolean>(starValue || false);
  const [yourPlayer, setYourPlayer] = useState<boolean>(
    yourPlayersIds ? yourPlayersIds.some((yourPlayerId) => yourPlayerId === id) : false,
  );

  const onPress = () => {
    switch (mode) {
      case 'edit': {
        if (playersIds && setPlayersIds) {
          if (playersIds.every((player) => player !== id)) {
            playersIds.push(id);
            setPlayersIds(playersIds);
            setStartEdit(!starEdit);
          } else {
            setPlayersIds(playersIds.filter((playerId) => playerId !== id));
            setStartEdit(!starEdit);
          }
        }
        return;
      }
      case 'list':
      case 'search': {
        return routerActions.navigateToPlayer(id);
      }
      default:
        return () => undefined;
    }
  };

  const starImage = (star: boolean, setYourPlayer: (value: boolean) => void) => {
    switch (mode) {
      case 'edit': {
        return !starEdit ? (
          <Image style={styles.star} source={PlayerList.Star} />
        ) : (
          <Image style={styles.star} source={PlayerList.EmptyStar} />
        );
      }
      case 'list': {
        return <Image style={styles.star} source={PlayerList.Star} />;
      }
      case 'search': {
        return star ? (
          <TouchableOpacity
            onPress={() => {
              setYourPlayer(!star);
              return deleteAction ? deleteAction(id) : undefined;
            }}
          >
            <Image style={styles.star} source={PlayerList.Star} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setYourPlayer(!star);
              return addAction ? addAction(id) : undefined;
            }}
          >
            <Image style={styles.star} source={PlayerList.EmptyStar} />
          </TouchableOpacity>
        );
      }
      default:
        return () => undefined;
    }
  };

  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <View style={styles.player}>
        {starImage(yourPlayer, setYourPlayer)}
        <Text style={styles.number}>{number}.</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{primaryPosition}</Text>
        <Text style={styles.team}>N/A</Text>
        <Text style={styles.class}>{graduatingClass}</Text>
        <Text style={styles.commitment}>{collegeCommitment}</Text>
        <Text style={styles.rating}>OFP</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EditPlayerItem;
