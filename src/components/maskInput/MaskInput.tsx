import React from 'react';
import {TextInputMask, TextInputMaskProps} from 'react-native-masked-text';
import styles from './MaskInput.styles';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface MaskInputProps extends TextInputMaskProps {
  textStyle?: TextStyle;
  rightImage?: ImageSourcePropType;
  rightImageContainerStyle?: ViewStyle;
  rightImageStyle?: StyleProp<ImageStyle>;
  containerStyle?: ViewStyle;
}
const MaskInput: React.FC<MaskInputProps> = ({
  textStyle,
  editable,
  type,
  options,
  value,
  placeholder,
  onChangeText,
  containerStyle,
  rightImage,
  rightImageContainerStyle,
  rightImageStyle,
  ...other
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <TextInputMask
        type={type}
        underlineColorAndroid="transparent"
        // selectionColor="#0433BF"
        style={{
          ...styles.textInput,
          ...textStyle,
        }}
        options={options}
        editable={editable}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...other}
      />
      {rightImage && (
        <View style={rightImageContainerStyle}>
          <Image style={rightImageStyle} source={rightImage} />
        </View>
      )}
    </View>
  );
};

export default MaskInput;
