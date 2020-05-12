import React from 'react';
import {Image, View, ViewProps, ViewStyle} from 'react-native';
import styles from './MenuBarContainer.styles';
import * as MenuBarImage from './assets';

export interface MenuBarContainerProps extends ViewProps {
  style?: ViewStyle;
  left?: React.ReactElement | React.ReactElement[];
  right?: React.ReactElement | React.ReactElement[];
}

const MenuBarContainer: React.FC<MenuBarContainerProps> = ({
  style,
  left,
  right,
  ...otherProps
}) => {
  return (
    <View
      {...otherProps}
      style={{
        ...styles.container,
        ...style,
      }}
    >
      <Image source={MenuBarImage.Background} style={styles.background} />
      <View style={styles.menuContainer}>
        <View style={styles.left}>{left}</View>
        <Image source={MenuBarImage.Scout} />
        <View style={styles.right}>{right}</View>
      </View>
    </View>
  );
};

export default MenuBarContainer;
