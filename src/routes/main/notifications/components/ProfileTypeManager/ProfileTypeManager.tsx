import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './ProfileTypeManager.styles';
import * as Profile from '../../assets/index';

const ProfileTypeManager: React.FC = () => {
  return (
    <View>
      <TouchableOpacity style={styles.touchAble}>
        <Text style={styles.title}>Profile Type Manager</Text>
        <Image style={styles.arrow} source={Profile.Arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTypeManager;
