import React from 'react';
import ItemModel from './ItemModel';
import MenuBarContainer, {MenuBarContainerProps} from './MenuBarContainer';
import MenuBarItem from './MenuBarItem';

interface MenuBarProps extends MenuBarContainerProps {
  leftIcons?: ItemModel[];
  rightIcons?: ItemModel[];
}

const MenuBar: React.FC<MenuBarProps> = ({leftIcons, rightIcons, ...otherProps}) => {
  const menuBarItemKeyExtractor = (index: number) => index;

  const renderItems = (items: ItemModel[]) => {
    return items.map((item, index) => (
      <MenuBarItem
        key={menuBarItemKeyExtractor(index)}
        image={item.image}
        onPress={item.onPress}
      />
    ));
  };

  const props: Partial<MenuBarContainerProps> = {};
  if (leftIcons) {
    props.left = renderItems(leftIcons);
  }
  if (rightIcons) {
    props.right = renderItems(rightIcons);
  }
  return <MenuBarContainer {...otherProps} {...props} />;
};

export default MenuBar;
