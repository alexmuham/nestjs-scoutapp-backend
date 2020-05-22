import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    color: 'black',
    padding: 5,
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '70%',
    backgroundColor: '#FFF',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cancelButtonText: {
    color: 'red',
  },
  cancelButton: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingTop: 10,
    width: '60%',
  },
  topButton: {
    padding: 10,
    width: '60%',
  },
});

export default styles;
