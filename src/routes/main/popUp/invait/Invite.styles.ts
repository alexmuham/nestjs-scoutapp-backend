import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '25%',
  },
  title: {
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 23,
  },
  inputFieldContainer: {
    width: '85%',
    paddingBottom: 20,
  },
  bottomContainer: {
    width: '80%',
    flexDirection: 'row',
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'black',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
});

export default styles;
