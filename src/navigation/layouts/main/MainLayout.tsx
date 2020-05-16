import React from 'react';
import {View} from 'react-native';
import styles from './MineLayout.styles';

const MainLayout: React.FC = ({children}) => {
  return <View style={styles.flexOne}>{children}</View>;
};

export default MainLayout;
