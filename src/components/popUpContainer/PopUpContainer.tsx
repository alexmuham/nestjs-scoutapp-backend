import React from 'react';
import styles from './PopUpContainer.styles';
import {View, ViewStyle} from 'react-native';

interface PopUpContainerProps {
  style?: ViewStyle;
  styleContainer?: ViewStyle;
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({
  children,
  style,
  styleContainer,
}) => {
  return (
    <View style={{...styleContainer, ...styles.flex}}>
      <View style={{...style, ...styles.container}}>{children}</View>
    </View>
  );
};

export default PopUpContainer;
