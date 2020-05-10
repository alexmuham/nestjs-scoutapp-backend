import React from 'react';
import AuthScene from './AuthScene';
import {View} from 'react-native';
import {NativeRouter} from 'react-router-native';

const Router: React.FC = () => {
  return (
    <NativeRouter>
      <View style={{flex: 1}}>
        <AuthScene />
      </View>
    </NativeRouter>
  );
};

export default Router;
