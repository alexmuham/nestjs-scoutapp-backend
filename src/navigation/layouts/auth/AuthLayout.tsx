import React from 'react';
import {View} from 'react-native';
import styles from './AuthLayout.styles';
import {useGuard} from 'state/hooks/UseGuard';

const AuthLayout: React.FC = ({children}) => {
  useGuard({requireAuthenticated: false});
  return <View style={styles.flexOne}>{children}</View>;
};

export default AuthLayout;
