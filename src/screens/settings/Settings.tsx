import React from 'react';
import {Text} from 'react-native';
import {MenuBar} from 'components';
import {MenuBarItems} from 'navigation';

const Settings: React.FC = () => {
  return (
    <div>
      <MenuBar leftIcons={[MenuBarItems.Friends]} rightIcons={[MenuBarItems.Settings]} />
      <Text>Settings</Text>
    </div>
  );
};

export default Settings;
