import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 58,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },

  leftInnerContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 12,
  },

  text: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
  },

  rightInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightImageContainer: {
    alignItems: 'flex-end',
  },

  linkImgWrapper: {
    flex: 1,
  },

  switchContainer: {
    height: '90%',
    width: '45%',
  },
});

export default styles;
