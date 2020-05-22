import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flexDirection: 'row',
    paddingBottom: 3,
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: 5,
  },
  playerListContainer: {
    flex: 1,
  },
  number: {
    marginRight: 7,
  },
  name: {
    textAlign: 'center',
    width: '34%',
  },
  position: {
    width: '12%',
    textAlign: 'center',
  },
  team: {
    width: '12%',
    textAlign: 'center',
  },
  class: {
    width: '8%',
    textAlign: 'center',
  },
  commited: {
    width: '20%',
    textAlign: 'center',
  },
  rating: {
    width: '7%',
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
    marginTop: 10,
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
