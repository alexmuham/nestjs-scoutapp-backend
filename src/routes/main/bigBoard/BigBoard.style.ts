import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectElementTitle: {
    alignSelf: 'center',
    fontSize: 18,
    lineHeight: 21,
    marginRight: 5,
  },
  dropDownItemText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    borderRadius: 3,
    fontSize: 18,
    lineHeight: 22,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  dropDownContainer: {
    height: 31,
    width: 63,
  },
  selectsContainer: {
    flexDirection: 'row',
  },
  selectElement: {
    flexDirection: 'row',
    width: 117,
    marginRight: 31,
  },
  header: {
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 27.62,
    marginBottom: 26,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 31,
  },
  navigText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.629333,
    color: '#A61911',
  },
  navigBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playersTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#A61911',
  },
});

export default styles;
