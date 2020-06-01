import React from 'react';
import {Text, TextInput, View, ViewStyle} from 'react-native';
import styles from './ReportParameterItem.styles';
import {itemColor} from 'utils/itemColorUtil';

interface ReportParameterItemProps {
  value: string;
  title: string;
  setValue: (value: string) => void;
  maxLength?: number;
  multiline?: boolean;
  type?: string;
  style?: ViewStyle;
}

const ReportParameterItem: React.FC<ReportParameterItemProps> = ({
  value,
  title,
  setValue,
  maxLength,
  multiline,
  type,
  style,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="#929292"
          style={
            type === 'digital' ? itemColor(value, styles.textInput) : styles.textInput
          }
          onChangeText={setValue}
          value={value}
          maxLength={maxLength}
          multiline={multiline}
        />
      </View>
    </View>
  );
};

export default ReportParameterItem;
