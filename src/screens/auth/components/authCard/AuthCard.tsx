import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';
import * as AuthImageAssets from '../../assets';
import Button from '../../../../components/button/Button';

interface AuthCardProps {
  buttonTitle: string;
  buttonPress: () => void;
  bottomText?: ReactElement;
}

const AuthCard: React.FC<AuthCardProps> = ({
  children,
  buttonPress,
  buttonTitle,
  bottomText,
}) => {
  return (
    <View>
      <View>
        <Image source={AuthImageAssets.ScoutTitle} />
        {children}
        <Button visualStyle="solid" onPress={buttonPress} title={buttonTitle} />
        {bottomText && <View>{bottomText}</View>}
      </View>
    </View>
  );
};
export default AuthCard;
