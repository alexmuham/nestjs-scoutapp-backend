import React from 'react';
import {ImageSourcePropType, Text, View} from 'react-native';

interface WelcomeProps {
  background: ImageSourcePropType;
}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <View>
      <Text>WELCOME</Text>
    </View>
  );
};

export default Welcome;
