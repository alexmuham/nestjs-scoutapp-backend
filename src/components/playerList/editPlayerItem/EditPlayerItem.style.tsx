import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingRight: 10,
    margin: 5,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#FFF',
    borderRadius: 7,
  },
  player: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 10,
  },
  number: {
    width: 30,
  },
  name: {
    width: 150,
  },
  position: {
    textAlign: 'center',
    width: 50,
  },
  team: {
    width: 50,
    textAlign: 'center',
  },
  class: {
    width: 100,
    textAlign: 'center',
  },
  commitment: {
    width: 150,
    textAlign: 'center',
  },
  rating: {
    width: 100,
    textAlign: 'center',
  },
});

export default styles;
