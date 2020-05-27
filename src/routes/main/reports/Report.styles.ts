import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 17,
  },
  itemContainer: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    color: '#A61911',
    fontSize: 25,
  },
  titleContainer: {
    paddingVertical: 15,
    paddingLeft: 10,
  },
  textContainer: {
    paddingBottom: 13,
    paddingLeft: 10,
  },
});

export default styles;
