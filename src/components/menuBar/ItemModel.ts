import {ImageSourcePropType, ImageStyle} from 'react-native';

export default interface ItemModel {
  image: ImageSourcePropType;
  onPress?: () => void;
  imageStyle?: ImageStyle;
}
