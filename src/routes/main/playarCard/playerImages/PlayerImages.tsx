import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import styles from '../PlayerCard.styles';
import * as PlayerEmptyImages from '../assets';
import Player from 'entities/Player';

interface PlayerImages {
  routerActions: (id: string) => void;
  player: Player;
}

const PlayerPhoto: React.FC<PlayerImages> = ({routerActions, player}) => {
  const renderSmallImage = (image: ImageSourcePropType | undefined) => (
    <TouchableOpacity style={styles.smallImage} onPress={() => undefined}>
      <Image source={image || PlayerEmptyImages.SmallEmptyImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.playerImages}>
      <TouchableOpacity
        style={styles.playerAvatar}
        onPress={() => routerActions(player.id)}
      >
        <Image
          source={
            player.images[0] ? {uri: player.images[0]} : PlayerEmptyImages.EmptyImage
          }
        />
      </TouchableOpacity>
      <View style={styles.smallImagesContainer}>
        {renderSmallImage(player.images[1] ? {uri: player.images[1]} : undefined)}
        {renderSmallImage(player.images[2] ? {uri: player.images[2]} : undefined)}
        {renderSmallImage(player.images[3] ? {uri: player.images[3]} : undefined)}
        {renderSmallImage(player.images[4] ? {uri: player.images[4]} : undefined)}
      </View>
    </View>
  );
};

export default PlayerPhoto;
