import React, {useEffect, useState} from 'react';
import {RequireLoadable, Image} from 'components';
import {
  ActivityIndicator,
  Image as RNImage,
  ImageSourcePropType,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  usePlayerActions,
  useRouterActions,
  useSettingsActions,
} from 'state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import styles from './PlayerCard.styles';
import {Route, useParams} from 'react-router-native';
import * as PlayerImages from './assets';
import {useTranslation} from 'react-i18next';
import {ImagePicker} from '../popUp';

const PlayerCard: React.FC = () => {
  const actions = usePlayerActions();
  const preferenceActions = useSettingsActions();
  const routerAction = useRouterActions();
  const {t} = useTranslation('player');

  const {id} = useParams();
  const {player, preferences} = useSelector((state: State) => state);

  const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);

  useEffect(() => {
    actions.fetchPlayer(id);
    preferenceActions.fetchPreferences();
  }, []);

  const renderInfo = (title: string, item: string | undefined) => (
    <View style={styles.renderInfoContainer}>
      <Text>{title}: </Text>
      {item ? <Text>{item}</Text> : <Text> -</Text>}
    </View>
  );

  const renderAdditionalInfoItem = (title: string, item: string | undefined) => (
    <View style={styles.additionalInfoContext}>
      <Text style={styles.additionalInfoLeftItem}>{title}: </Text>
      {item ? (
        <Text style={styles.additionalInfoRightItem}>{item}</Text>
      ) : (
        <Text style={styles.additionalInfoRightItem}> -</Text>
      )}
    </View>
  );

  const renderSmallImage = (image: ImageSourcePropType | undefined, id: string) => (
    <TouchableOpacity
      style={styles.smallImage}
      onPress={() => routerAction.navigateToImagePicker(id)}
    >
      <Image
        style={styles.image}
        source={image || PlayerImages.SmallEmptyImage}
        onLoadStart={() => setImageIsLoading(true)}
        onLoadEnd={() => setImageIsLoading(false)}
      >
        {imageIsLoading && <ActivityIndicator style={styles.imagePlaceholder} />}
      </Image>
    </TouchableOpacity>
  );

  return (
    <View style={styles.flexOne}>
      <RequireLoadable data={preferences}>
        {(
          preferences, // TODO FIXED
        ) => (
          <RequireLoadable data={player}>
            {(player) => {
              const [yourPlayer, setYourPlayer] = useState<boolean>(
                preferences.players.some((id) => id === player.id),
              );

              const {images, id} = player;

              const {pGEventResults} = player;
              return (
                <ScrollView>
                  <View style={styles.container}>
                    <View style={styles.backContainer}>
                      <View>
                        <TouchableOpacity
                          style={styles.backTouchableOpacity}
                          onPress={() => routerAction.goBack()}
                        >
                          <RNImage source={PlayerImages.Back} />
                          <Text style={styles.back}> {t('back')}</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.backTouchableOpacity}>
                        <TouchableOpacity
                          style={styles.contact}
                          onPress={() => undefined}
                        >
                          <RNImage source={PlayerImages.Contact} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => undefined}>
                          <RNImage source={PlayerImages.Share} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.topContainer}>
                      <Text style={styles.name}>{player.name}</Text>
                      {yourPlayer ? (
                        <TouchableOpacity
                          onPress={() => {
                            actions.deletePlayerFromUser(player.id);
                            setYourPlayer(!yourPlayer);
                          }}
                        >
                          <RNImage source={PlayerImages.FullStar} />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            actions.addPlayerToUser(player.id);
                            setYourPlayer(!yourPlayer);
                          }}
                        >
                          <RNImage source={PlayerImages.EmptyStar} />
                        </TouchableOpacity>
                      )}
                    </View>
                    <View style={styles.playerInfo}>
                      <View style={styles.playerImages}>
                        <TouchableOpacity
                          style={styles.playerAvatar}
                          onPress={() => routerAction.navigateToImagePicker(player.id)}
                        >
                          <Image
                            style={styles.image}
                            source={
                              images[0] ? {uri: images[0]} : PlayerImages.EmptyImage
                            }
                            onLoadStart={() => setImageIsLoading(true)}
                            onLoadEnd={() => setImageIsLoading(false)}
                          >
                            {imageIsLoading && (
                              <ActivityIndicator style={styles.imagePlaceholder} />
                            )}
                          </Image>
                        </TouchableOpacity>
                        <View style={styles.smallImagesContainer}>
                          {renderSmallImage(
                            player.images[1] ? {uri: player.images[1]} : undefined,
                            id,
                          )}
                          {renderSmallImage(
                            player.images[2] ? {uri: player.images[2]} : undefined,
                            id,
                          )}
                          {renderSmallImage(
                            player.images[3] ? {uri: player.images[3]} : undefined,
                            id,
                          )}
                          {renderSmallImage(
                            player.images[4] ? {uri: player.images[4]} : undefined,
                            id,
                          )}
                        </View>
                      </View>
                      <View style={styles.info}>
                        {renderInfo(t('class'), player.graduatingClass)}
                        {renderInfo(t('position'), player.primaryPosition)}
                        {renderInfo(t('age'), undefined)}
                        {renderInfo(t('height'), player.height)}
                        {renderInfo(t('weight'), player.weight)}
                        {renderInfo(t('commitment'), player.collegeCommitment)}
                        {renderInfo(t('highSchool'), player.highSchool)}
                        {renderInfo(t('summerTeam'), undefined)}
                        {renderInfo(t('throw/bats'), `${player.throws}/${player.bats}`)}
                        {renderInfo(t('ofp'), undefined)}
                      </View>
                    </View>
                    <View style={styles.additionalInfo}>
                      <View style={styles.additionalInfoTitle}>
                        <Text style={styles.additionalInfoLeftItem}>
                          {t('positionPlayer')}
                        </Text>
                        <Text style={styles.additionalInfoRightItem}>{t('pitcher')}</Text>
                      </View>
                      <View style={styles.additionalInfoTContext}>
                        {renderAdditionalInfoItem(
                          t('60Time'),
                          pGEventResults ? pGEventResults.sixtyYdDash : undefined,
                        )}
                        {renderAdditionalInfoItem(
                          t('10YardSplit'),
                          pGEventResults ? pGEventResults.tenYdSplit : undefined,
                        )}
                        {renderAdditionalInfoItem(
                          t('positionVelocity'),
                          pGEventResults ? pGEventResults.infieldVelocity : undefined,
                        )}
                        {renderAdditionalInfoItem(t('popTime'), undefined)}
                        {renderAdditionalInfoItem(
                          t('exitVelocity'),
                          pGEventResults ? pGEventResults.exitVelocity : undefined,
                        )}
                      </View>
                    </View>
                    <View style={styles.bottomContainer}>
                      <View style={styles.additionalInfoTitle}>
                        <Text style={styles.bottomContainerText}>{t('reports')}</Text>
                      </View>
                      <View style={styles.reportsItemContainer}>
                        <TouchableOpacity style={styles.reportsItem}>
                          <RNImage source={PlayerImages.Plus} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.bottomContainer}>
                      <View style={styles.additionalInfoTitle}>
                        <Text style={styles.bottomContainerText}>
                          {t('upcomingGames')}
                        </Text>
                      </View>
                      <View style={styles.upcomingGamesContainer}>
                        <Text style={styles.upcomingGamesText}>
                          {t('noUpcomingGame')}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              );
            }}
          </RequireLoadable>
        )}
      </RequireLoadable>
      <Route path="/main/player:id/imagePicker">
        <Modal animationType="fade" transparent>
          <ImagePicker />
        </Modal>
      </Route>
    </View>
  );
};

export default PlayerCard;
