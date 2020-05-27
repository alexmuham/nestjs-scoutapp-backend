import React from 'react';
import {
  ActivityIndicator,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../PlayerCard.styles';
import * as PlayerEmptyImages from '../assets';
import Player from 'entities/Player';
import {Image} from 'components';

interface PlayerImages {
  routerActions: (id: string) => void;
  player: Player;
  setImageIsLoading: (value: boolean) => void;
  imageIsLoading: boolean;
  images: string[];
}

const PlayerPhoto: React.FC<PlayerImages> = ({
  routerActions,
  player,
  imageIsLoading,
  setImageIsLoading,
  images,
}) => {
  const renderSmallImage = (image: ImageSourcePropType | undefined) => (
    <TouchableOpacity style={styles.smallImage} onPress={() => routerActions(player.id)}>
      <Image
        style={styles.image}
        source={image || PlayerEmptyImages.SmallEmptyImage}
        onLoadStart={() => setImageIsLoading(true)}
        onLoadEnd={() => setImageIsLoading(false)}
      >
        {imageIsLoading && <ActivityIndicator style={styles.imagePlaceholder} />}
      </Image>
    </TouchableOpacity>
  );

  return (
    <View style={styles.playerImages}>
      <TouchableOpacity
        style={styles.playerAvatar}
        onPress={() => routerActions(player.id)}
      >
        <Image
          style={styles.image}
          source={images[0] ? {uri: images[0]} : PlayerEmptyImages.EmptyImage}
          onLoadStart={() => setImageIsLoading(true)}
          onLoadEnd={() => setImageIsLoading(false)}
        >
          {imageIsLoading && <ActivityIndicator style={styles.imagePlaceholder} />}
        </Image>
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
