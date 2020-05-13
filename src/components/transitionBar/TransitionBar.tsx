import React from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import * as Item from './assets';
import styles from './TransitionBar.styles';

interface TransitionBarProps {
  style?: ViewStyle;
  activeShedule?: boolean;
  activeSearch?: boolean;
  activeProspect?: boolean;
  activeNotification?: boolean;
  activeBigBord?: boolean;
}

const TransitionBar: React.FC<TransitionBarProps> = ({
  style,
  activeBigBord = false,
  activeNotification = false,
  activeProspect = false,
  activeSearch = false,
  activeShedule = false,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <TouchableOpacity style={styles.item}>
        {!activeShedule ? (
          <Image source={Item.Shedule} />
        ) : (
          <Image source={Item.ActiveShedule} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        {!activeSearch ? (
          <Image source={Item.Search} />
        ) : (
          <Image source={Item.ActiveSearch} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        {!activeProspect ? (
          <Image source={Item.Prospect} />
        ) : (
          <Image source={Item.ActiveProspect} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        {!activeNotification ? (
          <Image source={Item.Notification} />
        ) : (
          <Image source={Item.ActiveNotification} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        {!activeBigBord ? (
          <Image source={Item.BigBord} />
        ) : (
          <Image source={Item.ActiveBigBord} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TransitionBar;
