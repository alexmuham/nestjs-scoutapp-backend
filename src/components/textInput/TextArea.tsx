import React from 'react';
import styles from './TextInput.styles';
import {TextInput, View, ViewStyle} from 'react-native';

interface TextAreaProps {
  placeholder?: string;
  onChangeText: (value: string) => void;
  value: string;
  textAreaContainerStyle?: ViewStyle;
  textAreaStyle?: ViewStyle;
  maxLength?: number;
  isMultiline?: boolean;
  numberOfLines?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  onChangeText,
  placeholder,
  value,
  textAreaContainerStyle,
  textAreaStyle,
  maxLength,
  isMultiline,
  numberOfLines,
}) => {
  return (
    <View style={{...styles.container, ...textAreaContainerStyle}}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#929292"
        style={{...styles.textInput, ...textAreaStyle}}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        multiline={isMultiline}
        editable
      />
    </View>
  );
};

export default TextArea;
