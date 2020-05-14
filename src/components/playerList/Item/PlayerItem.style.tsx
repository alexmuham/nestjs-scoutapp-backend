import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingRight: 150,
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
    width: '7%',
  },
  name: {
    width: '40%',
  },
  position: {
    textAlign: 'left',
    width: '15%',
  },
  team: {
    width: '15%',
  },
  class: {
    width: '15%',
  },
  commited: {
    width: '25%',
  },
  rating: {
    width: '10%',
  },
});

export default styles;
