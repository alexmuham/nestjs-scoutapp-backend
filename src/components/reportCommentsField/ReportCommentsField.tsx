import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './ReportCommentsField.styles';
import {ReportParameterItem} from 'components';

interface ReportParameterItemProps {
  value: string;
  title: string;
  setValue: (value: string) => void;
  commentValue: string;
  setComment: (value: string) => void;
  placeholder: string;
}

const ReportCommentsField: React.FC<ReportParameterItemProps> = ({
  value,
  title,
  setValue,
  commentValue,
  setComment,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <ReportParameterItem
        value={value}
        title={title}
        setValue={setValue}
        type="digital"
        maxLength={1}
      />
      <View style={styles.textInputContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="#929292"
          style={styles.textInput}
          onChangeText={setComment}
          value={commentValue}
          multiline
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default ReportCommentsField;
