import React from 'react';
import ItemModel from './ItemModel';
import MenuBarContainer, {MenuBarContainerProps} from './MenuBarContainer';
import MenuBarItem from './MenuBarItem';
import {useHistory} from 'react-router-native';

interface MenuBarProps extends MenuBarContainerProps {
  leftIcons?: ItemModel[];
  rightIcons?: ItemModel[];
}

const MenuBar: React.FC<MenuBarProps> = ({leftIcons, rightIcons, ...otherProps}) => {
  const menuBarItemKeyExtractor = (index: number) => index;

  const history = useHistory();

  const openSettings = () => {
    history.push('/settings');
  };
  const openFriends = () => {
    history.push('/friends');
  };

  const renderItems = (items: ItemModel[], onPress: () => void) => {
    return items.map((item, index) => (
      <MenuBarItem
        key={menuBarItemKeyExtractor(index)}
        image={item.image}
        onPress={onPress}
      />
    ));
  };

  const props: Partial<MenuBarContainerProps> = {};
  if (leftIcons) {
    props.left = renderItems(leftIcons, () => openFriends());
  }
  if (rightIcons) {
    props.right = renderItems(rightIcons, () => openSettings());
  }
  return <MenuBarContainer {...otherProps} {...props} />;
};

export default MenuBar;
