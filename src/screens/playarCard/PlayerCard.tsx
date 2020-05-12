import React from 'react';
import {MenuBar} from 'components';
import {MenuBarItems} from 'navigation';

const PlayerCard: React.FC = () => {
  return (
    <MenuBar leftIcons={[MenuBarItems.Friends]} rightIcons={[MenuBarItems.Settings]} />
  );
};

export default PlayerCard;
