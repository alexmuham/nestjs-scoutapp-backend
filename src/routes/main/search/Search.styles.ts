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
    flex: 1,
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
    paddingBottom: 15,
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
    paddingLeft: 10,
    borderRadius: 10,
  },
  itemsContainerStyle: {
    paddingLeft: 5,
    borderRadius: 10,
    marginTop: 5,
    height: 100,
  },
  batThrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  batContainer: {
    width: '40%',
  },
  trowContainer: {
    width: '40%',
  },
  positionVelocityContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 25,
  },
  button: {
    width: '80%',
  },
  buttonContainer: {
    alignItems: 'center',
    bottom: 0,
  },
});

export default styles;
