import React, {ReactElement} from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import * as AuthImageAssets from '../../assets';
import Button from '../../../../components/button/Button';
import styles from './AuthCard.styles';

interface AuthCardProps {
  buttonTitle: string;
  buttonPress: () => void;
  bottomText?: ReactElement;
  title: string;
  centralContainerStyles?: ViewStyle;
}

const AuthCard: React.FC<AuthCardProps> = ({
  children,
  buttonPress,
  buttonTitle,
  bottomText,
  title,
  centralContainerStyles,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={AuthImageAssets.ScoutTitle} />
      </View>
      <View style={{...styles.centralContainer, ...centralContainerStyles}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {children}
      </View>
      <View
        style={bottomText ? styles.bottomContainer : styles.bottomContainerWithoutText}
      >
        <Button visualStyle="solid" onPress={buttonPress} title={buttonTitle} />
        {bottomText && <View style={styles.bottomText}>{bottomText}</View>}
      </View>
    </View>
  );
};
export default AuthCard;
