import React, {useEffect} from 'react';
import {RequireLoadable} from 'components';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {usePlayerActions, useRouterActions} from 'state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import styles from './PlayerCard.styles';
import {useParams} from 'react-router-native';
import * as PlayerImages from './assets';
import {useTranslation} from 'react-i18next';

const PlayerCard: React.FC = () => {
  const actions = usePlayerActions();
  const routerAction = useRouterActions();
  const {t} = useTranslation('player');

  const {id} = useParams();

  useEffect(() => {
    actions.fetchPlayer(id);
  }, []);

  const {player} = useSelector((state: State) => state);

  const renderInfo = (title: string, item: string | undefined) => (
    <View style={styles.renderInfoContainer}>
      <Text>{title}: </Text>
      {item ? <Text>{item}</Text> : <Text> -</Text>}
    </View>
  );

  return (
    <RequireLoadable data={player}>
      {(player) => {
        return (
          <ScrollView>
            <View style={styles.container}>
              <View>
                <TouchableOpacity
                  style={styles.backContainer}
                  onPress={() => routerAction.goBack()}
                >
                  <Image source={PlayerImages.Back} />
                  <Text style={styles.back}> {t('back')}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.topContainer}>
                <Text style={styles.name}>{player.name}</Text>
                <TouchableOpacity style={styles.contact} onPress={() => undefined}>
                  <Image source={PlayerImages.Contact} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => undefined}>
                  <Image source={PlayerImages.Share} />
                </TouchableOpacity>
              </View>
              <View style={styles.playerInfo}>
                <View style={styles.playerImages}>
                  <TouchableOpacity style={styles.playerAvatar}>
                    <Image source={PlayerImages.EmptyImage} />
                  </TouchableOpacity>
                </View>
                <View style={styles.info}>
                  {renderInfo(t('class'), player.graduatingClass)}
                  {renderInfo(t('position'), player.primaryPosition)}
                  {renderInfo(t('age'), undefined)}
                  {renderInfo(t('height'), player.height)}
                  {renderInfo(t('weight'), player.weight)}
                  {renderInfo(t('commited'), undefined)}
                  {renderInfo(t('highSchool'), player.highSchool)}
                  {renderInfo(t('summerTeam'), undefined)}
                  {renderInfo(t('throw'), player.throws)}
                  {renderInfo(t('ofp'), undefined)}
                </View>
              </View>
            </View>
          </ScrollView>
        );
      }}
    </RequireLoadable>
  );
};

export default PlayerCard;
