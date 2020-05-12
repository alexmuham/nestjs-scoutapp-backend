import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import styles from './MenuBarContainer.styles';

interface MenuBarItemProps {
  image: ImageSourcePropType;
  onPress?: () => void;
}

const MenuBarItem: React.FC<MenuBarItemProps> = ({image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuItem}>
        <Image source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuBarItem;
