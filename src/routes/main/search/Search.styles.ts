import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#A61911',
    fontSize: 26,
  },
  inputSearchContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5D5',
  },
  searchText: {
    paddingLeft: 19,
    paddingBottom: 5,
    fontSize: 16,
  },
  extendedSearchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  extendedSearchText: {
    color: '#A61911',
    paddingRight: 10,
    fontSize: 17,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPositionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputPositionLastContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  positionItem: {
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 5,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    marginVertical: 3,
  },
  positionText: {
    fontSize: 17,
  },

  passiveItem: {
    backgroundColor: '#FFF',
  },

  activeItem: {
    backgroundColor: '#A61911',
  },

  activeText: {
    color: '#FFF',
  },
  positionContainer: {
    width: '90%',
    paddingBottom: 10,
  },
  positionTitle: {
    fontSize: 17,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: '#FFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
    borderRadius: 10,
  },
  activeItemStyles: {
    padding: 5,
  },
  batThrow: {
    flexDirection: 'row',
  },
});

export default styles;
