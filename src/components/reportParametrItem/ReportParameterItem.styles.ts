import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '50%',
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    paddingLeft: 9,
    textAlign: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
    paddingRight: 10,
    height: 35,
  },
  textInputContainer: {
    width: '30%',
  },
});

export default styles;
