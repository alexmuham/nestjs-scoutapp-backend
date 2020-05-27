import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingBottom: 3,
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: 5,
  },
  playerListContainer: {
    width: '100%',
  },
  number: {
    marginRight: 7,
  },
  name: {
    textAlign: 'center',
    width: 217,
  },
  position: {
    width: 50,
    textAlign: 'center',
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
  topContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberOfPlayersText: {
    color: '#A61911',
  },
  playerList: {
    paddingTop: 10,
  },
  editContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  edit: {
    marginRight: 5,
  },
  container: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    paddingTop: 15,
  },
  titleText: {
    color: '#A61911',
    fontSize: 30,
  },
});

export default styles;
