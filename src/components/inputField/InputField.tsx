import React from 'react';
import {Image, TextInput, View, ViewProps} from 'react-native';
import styles from './InputField.styles';
import * as InputFieldImages from './assets';

interface AuthInputFieldProps extends ViewProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const InputField: React.FC<AuthInputFieldProps> = ({
  style,
  placeholder,
  children,
  onChangeText,
  value,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#929292"
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...otherProps}
      />
      <Image source={InputFieldImages.Search} style={styles.search} />
    </View>
  );
};

export default InputField;
