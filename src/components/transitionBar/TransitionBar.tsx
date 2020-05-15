import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
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
  const renderComponent = (
    status: boolean,
    emptyImage: ImageSourcePropType,
    activeImage: ImageSourcePropType,
  ) => (
    <TouchableOpacity style={styles.item}>
      {!status ? <Image source={emptyImage} /> : <Image source={activeImage} />}
    </TouchableOpacity>
  );
  return (
    <View style={{...styles.container, ...style}}>
      {renderComponent(activeShedule, Item.Shedule, Item.ActiveShedule)}
      {renderComponent(activeSearch, Item.Search, Item.ActiveSearch)}
      {renderComponent(activeProspect, Item.Prospect, Item.ActiveProspect)}
      {renderComponent(activeNotification, Item.Notification, Item.ActiveNotification)}
      {renderComponent(activeBigBord, Item.BigBord, Item.ActiveBigBord)}
    </View>
  );
};

export default TransitionBar;
