import React from 'react';
import {Text, TextStyle, TouchableOpacity} from 'react-native';
import styles from './TextLink.styles';

interface TextLinkProps {
  onPress: () => void;
  text: string;
  styleText?: TextStyle;
}

const TextLink: React.FC<TextLinkProps> = ({onPress, text, styleText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{...styles.text, ...styleText}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextLink;
