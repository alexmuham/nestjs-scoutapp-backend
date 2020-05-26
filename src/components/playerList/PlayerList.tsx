import React from 'react';
import Player from 'entities/Player';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './PlayerList.styles';
import * as playerListImages from './assets';
import PlayerItem from './playerItem/PlayerItem';
import {useTranslation} from 'react-i18next';
import EditPlayerItem from './editPlayerItem/EditPlayerItem';

interface PlayerListProps {
  players: Player[];
  title?: string;
  styleContainer?: ViewStyle;
  navigateActions?: () => void;
  mode: 'list' | 'edit' | 'search';
  editAction?: () => void;
  starValue?: boolean;
  playersIds?: string[];
  setPlayersIds?: (playersIds: string[]) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({
  players,
  title,
  styleContainer,
  navigateActions,
  mode,
  editAction,
  starValue,
  setPlayersIds,
  playersIds,
}) => {
  const {t} = useTranslation('playerList');

  const playerList = (player: Player, number: number) => {
    switch (mode) {
      case 'list': {
        return <PlayerItem player={player} number={number} />;
      }
      case 'edit': {
        return (
          <EditPlayerItem
            player={player}
            starValue={!!starValue}
            setPlayersIds={setPlayersIds}
            playersIds={playersIds}
            number={number}
          />
        );
      }
      case 'search': {
        return <PlayerItem player={player} number={number} />;
      }
      default: {
        return <></>;
      }
    }
  };

  const renderItem = (text: string, image: ImageSourcePropType, action?: () => void) => {
    return (
      <TouchableOpacity style={styles.editContainer} onPress={action}>
        <>
          <Image style={styles.edit} source={image} />
          <Text style={styles.numberOfPlayersText}>{text}</Text>
        </>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...styleContainer, ...styles.container}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.numberOfPlayersText}>{`${players.length} ${t(
          'players',
        )}`}</Text>
        {mode === 'list' &&
          renderItem(t('editList'), playerListImages.Edit, navigateActions)}
        {mode === 'edit' && renderItem(t('save'), playerListImages.Save, editAction)}
      </View>
      <ScrollView horizontal>
        <View style={styles.playerListContainer}>
          {players.length > 0 && (
            <View>
              <View style={styles.list}>
                <Text style={styles.name}>{t('name')}</Text>
                <Text style={styles.position}>{t('pos')}</Text>
                <Text style={styles.team}>{t('team')}</Text>
                <Text style={styles.class}>{t('class')}</Text>
                <Text style={styles.commited}>{t('commited')}</Text>
                <Text style={styles.rating}>{t('OFP')}</Text>
              </View>
              <View>
                <FlatList
                  data={players}
                  renderItem={({item, index}) => {
                    return playerList(item, index + 1);
                  }}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayerList;
