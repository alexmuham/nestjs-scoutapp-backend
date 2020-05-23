import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  numberOfFriendsText: {
    color: '#A61911',
    fontSize: 20,
    marginRight: 5,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: '#A61911',
    fontSize: 30,
  },
  friendList: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export default styles;
