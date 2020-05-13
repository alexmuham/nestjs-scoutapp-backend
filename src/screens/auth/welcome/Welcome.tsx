import React, {useEffect} from 'react';
import {ImageSourcePropType, Text, View} from 'react-native';
import {AuthInfoKeeper} from '../../../auth';
import {useHistory} from 'react-router-native';

interface WelcomeProps {
  background: ImageSourcePropType;
}

const Welcome: React.FC<WelcomeProps> = () => {
  const history = useHistory();

  useEffect(() => {
    AuthInfoKeeper.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        history.push('/main');
      }
    });
  }, []);
  return (
    <View>
      <Text>WELCOME</Text>
    </View>
  );
};

export default Welcome;
