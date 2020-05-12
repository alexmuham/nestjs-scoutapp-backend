import React from 'react';
import {View} from 'react-native';
import styles from './AuthLayout.styles';

const AuthLayout: React.FC = ({children}) => {
  return <View style={styles.flexOne}>{children}</View>;
};

export default AuthLayout;
