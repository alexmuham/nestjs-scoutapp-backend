import React from 'react';
import Player from 'entities/Player';
import {FlatList, ScrollView, Text, View, ViewStyle} from 'react-native';
import {LoadableContainer} from 'state/entities/LoadableContainer';
import styles from './PlayerList.styles';
import {useTranslation} from 'react-i18next';
import {RequireLoadable} from '../index';
import Item from './Item/Item';

interface PlayerListProps {
  players: LoadableContainer<{players: Player[]}>;
  title?: string;
  styleContainer?: ViewStyle;
}

const PlayerList: React.FC<PlayerListProps> = ({players, title, styleContainer}) => {
  const {t} = useTranslation('playerList');

  return (
    <View style={{...styleContainer, ...styles.container}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.sort}>
        <Text>{t('sort')}</Text>
      </View>
      <View style={styles.list}>
        <Text>{t('players')}</Text>
        <Text>{t('position')}</Text>
        <Text>{t('height')}</Text>
        <Text>{t('weight')}</Text>
        <Text>{t('state')}</Text>
        <Text>{t('highSchool')}</Text>
      </View>
      <ScrollView horizontal>
        <RequireLoadable data={players}>
          {({players}) => {
            return (
              <>
                <FlatList
                  // @ts-ignore
                  data={players.players}
                  renderItem={({item}) => {
                    return (
                      <>
                        <Item player={item} />
                      </>
                    );
                  }}
                  keyExtractor={(item) => item.id}
                />
              </>
            );
          }}
        </RequireLoadable>
      </ScrollView>
    </View>
  );
};

export default PlayerList;
