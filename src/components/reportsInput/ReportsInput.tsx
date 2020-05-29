import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './ReportsInput.styles';

interface ReportsInputProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
}

const ReportsInput: React.FC<ReportsInputProps> = ({value, title, setValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{title}</Text>
      <View>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.textInput}
          onChangeText={setValue}
          value={value}
          multiline
          maxLength={200}
        />
      </View>
    </View>
  );
};

export default ReportsInput;
