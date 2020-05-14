import React, {useState} from 'react';
import Player from 'entities/Player';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './List.styles';
import {useTranslation} from 'react-i18next';
import PlayerItem from '../Item/PlayerItem';
import * as playerList from '../assets';

interface ListProps {
  players: Player[];
}

const List: React.FC<ListProps> = ({players}) => {
  const {t} = useTranslation('playerList');
  const [mode, setMode] = useState(true);

  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.numberOfPlayersText}>{`${players.length} ${t(
          'players',
        )}`}</Text>
        <TouchableOpacity style={styles.editContainer} onPress={() => setMode(!mode)}>
          {mode ? (
            <>
              <Image style={styles.edit} source={playerList.Edit} />
              <Text style={styles.numberOfPlayersText}>{t('editList')}</Text>
            </>
          ) : (
            <>
              <Image style={styles.edit} source={playerList.Save} />
              <Text style={styles.numberOfPlayersText}>{t('save')}</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.playerListContainer}>
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
                return (
                  <>
                    <PlayerItem player={item} number={index + 1} />
                  </>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default List;
