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
import {useRouterActions} from '../../state/hooks/UseActions';

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
  const routerActions = useRouterActions();

  const renderComponent = (
    status: boolean,
    emptyImage: ImageSourcePropType,
    activeImage: ImageSourcePropType,
    navigateAction: () => void,
  ) => (
    <TouchableOpacity style={styles.item} onPress={() => navigateAction()}>
      {!status ? <Image source={emptyImage} /> : <Image source={activeImage} />}
    </TouchableOpacity>
  );
  return (
    <View style={{...styles.container, ...style}}>
      {renderComponent(
        activeShedule,
        Item.Shedule,
        Item.ActiveShedule,
        routerActions.navigateToProspect,
      )}
      {renderComponent(
        activeSearch,
        Item.Search,
        Item.ActiveSearch,
        routerActions.navigateToSearch,
      )}
      {renderComponent(
        activeProspect,
        Item.Prospect,
        Item.ActiveProspect,
        routerActions.navigateToProspect,
      )}
      {renderComponent(
        activeNotification,
        Item.Notification,
        Item.ActiveNotification,
        routerActions.navigateToProspect,
      )}
      {renderComponent(
        activeBigBord,
        Item.BigBord,
        Item.ActiveBigBord,
        routerActions.navigateToProspect,
      )}
    </View>
  );
};

export default TransitionBar;
