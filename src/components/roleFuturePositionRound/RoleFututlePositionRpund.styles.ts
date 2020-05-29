import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
  },
  textInputEmpty: {
    paddingBottom: 9,
    paddingLeft: 10,
    paddingTop: 9,
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
    textAlign: 'center',
    color: '#A61911',
  },
  textInputFull: {
    paddingBottom: 9,
    paddingLeft: 10,
    paddingTop: 9,
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
    textAlign: 'center',
    color: '#A61911',
    borderColor: '#A61911',
    borderWidth: 1,
  },
  itemsContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
  },
  renderItemContainer: {
    flex: 1,
    paddingRight: 10,
  },
  renderItemText: {
    textAlign: 'center',
    paddingBottom: 5,
  },
});

export default styles;
