import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  contextContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 50,
    marginRight: 20,
  },
  imageText: {
    color: '#FFF',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstName: {
    paddingRight: 10,
  },
  moving: {
    justifyContent: 'center',
    paddingRight: 15,
  },
  deleteFriend: {
    justifyContent: 'center',
    padding: 20,
  },
});

export default styles;
