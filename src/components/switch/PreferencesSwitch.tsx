import React from 'react';
import {Switch} from 'react-native-switch';
import styles from './PreferencesSwitch.styles';
import {ViewProps} from 'react-native';

interface SwitchProps extends ViewProps {
  switchState?: boolean;
  onPress?: () => void;
}

const PreferencesSwitch: React.FC<SwitchProps> = ({switchState, onPress}) => {
  return (
    <Switch
      value={switchState}
      onValueChange={onPress}
      backgroundActive="#A61911"
      backgroundInactive="#D4D1D1"
      renderActiveText={false}
      renderInActiveText={false}
      circleBorderWidth={0}
      innerCircleStyle={styles.switchContainer}
      circleSize={25}
      switchBorderRadius={30}
    />
  );
};

export default PreferencesSwitch;
