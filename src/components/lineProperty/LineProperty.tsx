import React from 'react';
import {View, ViewStyle, ViewProps, Text, Image} from 'react-native';
// @ts-ignore
import {Switch} from 'react-native-switch';
import styles from './LineProperty.styles';
import {Arrow} from './assets';

type LinePropertyType = 'link' | 'switch';

interface LinePropertyProps extends ViewProps {
  functionalityType: LinePropertyType;
  leftElement: () => React.ReactNode;
  containerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle;
  switchState?: boolean;
  onPress?: () => void;
}

const LineProperty: React.FC<LinePropertyProps> = ({
  functionalityType,
  leftElement,
  containerStyle,
  rightContainerStyle,
  switchState,
  onPress,
}) => {
  const FunctionalComponent = (): React.ReactElement => {
    switch (functionalityType) {
      case 'link':
        return (
          <View style={styles.rightImageContainer}>
            <Image source={Arrow} style={styles.rightImageContainer} />
          </View>
        );
      case 'switch':
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
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      <View style={styles.wrapper}>
        <View
          style={{
            ...styles.leftInnerContainer,
          }}
        >
          <Text style={styles.text}>{leftElement()}</Text>
        </View>
        <View
          style={{
            ...styles.rightInnerContainer,
            ...rightContainerStyle,
          }}
        >
          <FunctionalComponent />
        </View>
      </View>
    </View>
  );
};

export default LineProperty;
