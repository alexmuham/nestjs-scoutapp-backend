import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkBox: {
    width: 15,
    height: 15,
    color: 'black',
    marginRight: 10,
    marginLeft: 3,
    borderRadius: 3,
    borderColor: '#CCCCCC',
  },
  bottomText: {
    color: '#727272',
    fontSize: 12,
    paddingLeft: 2,
  },
  bottomTextContainer: {
    flexDirection: 'row',
  },
  bottomTextContainerLogin: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textLink: {
    fontSize: 15,
  },
});

export default styles;
