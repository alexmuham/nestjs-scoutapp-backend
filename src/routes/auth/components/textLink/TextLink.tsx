import React from 'react';
import {Text, TextStyle, TouchableOpacity} from 'react-native';
import styles from './TextLink.styles';
import {Link} from 'react-router-native';

interface TextLinkProps {
  onPress: () => void;
  text: string;
  styleText?: TextStyle;
  link: string;
}

const TextLink: React.FC<TextLinkProps> = ({onPress, text, styleText, link}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Link to={link}>
        <Text style={{...styles.text, ...styleText}}>{text}</Text>
      </Link>
    </TouchableOpacity>
  );
};

export default TextLink;
