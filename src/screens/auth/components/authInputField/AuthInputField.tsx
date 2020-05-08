import React from 'react';
import {KeyboardTypeOptions, TextInput, View, ViewProps, ViewStyle} from 'react-native';
import styles from './AuthInputField.styles';

interface AuthInputFieldProps extends ViewProps {
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
  style,
  placeholder,
  placeholderTextColor,
  children,
  onChangeText,
  value,
  ...otherProps
}) => {
  // Keyboard configuration
  const keyboardType: KeyboardTypeOptions = 'default';
  let autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;

  // @ts-ignore
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
        placeholderTextColor="#90B3DD"
        style={{
          ...styles.textInput,
          ...inputBorderStyle,
        }}
        autoCapitalize={autoCapitalize}
        selectionColor="#0433BF"
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
};

export default AuthInputField;
