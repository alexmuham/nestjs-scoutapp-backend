import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styles from './AuthInputField.styles';
import * as AuthImageAssets from '../../assets';

interface AuthInputFieldProps extends ViewProps {
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  type?: 'none' | 'emailAddress' | 'password' | 'telephoneNumber' | 'date' | 'decimal';
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
  style,
  placeholder,
  placeholderTextColor,
  children,
  onChangeText,
  value,
  type,
  ...otherProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  let autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;

  let inputBorderStyle: ViewStyle;

  if (value == null || value === '') {
    inputBorderStyle = styles.textInputEmpty;
  } else {
    inputBorderStyle = styles.textInputFull;
  }

  return (
    <View style={[styles.container, style]}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#D6D6D6"
        style={{
          ...styles.textInput,
          ...inputBorderStyle,
        }}
        autoCapitalize={autoCapitalize}
        selectionColor="#0433BF"
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...otherProps}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        // @ts-ignore
        textContentType={type !== 'decimal' ? type : undefined}
      />
      {type === 'password' && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.showHidePasswordContainer}
        >
          {value == null || value === '' ? (
            <Image source={AuthImageAssets.OpenEye} style={styles.pass} />
          ) : (
            <Image source={AuthImageAssets.CloseEye} style={styles.pass} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthInputField;
