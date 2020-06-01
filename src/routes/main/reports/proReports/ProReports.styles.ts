import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reportHeader: {
    paddingHorizontal: 20,
  },
  textInput: {
    paddingLeft: 9,
    textAlign: 'center',
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
    width: 50,
    height: 40,
  },
  parameterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  parameterItemScrollView: {
    paddingBottom: 18,
    paddingTop: 2,
  },
  parameterTextInputContainer: {
    paddingRight: 20,
  },
  parameterItemTitle: {
    width: 135,
    fontSize: 18,
  },
  parameterItemsTitle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  parameterItemsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textParameter: {
    width: 110,
  },
  textP: {
    width: 95,
    textAlign: 'center',
  },
  textF: {
    width: 50,
    textAlign: 'center',
  },
  textAdj: {
    width: 90,
    textAlign: 'center',
  },
  parameterItemContainer: {
    paddingTop: 20,
  },
  textInputColorTwo: {
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
  },
  textInputColorTree: {
    color: '#A61911',
    borderColor: '#A61911',
    borderWidth: 1,
  },
  textInputColorFore: {
    color: '#FEB72D',
    borderColor: '#FEB72D',
    borderWidth: 1,
  },
  textInputColorFife: {
    color: '#00B13C',
    borderColor: '#00B13C',
    borderWidth: 1,
  },
  textInputColorSix: {
    color: '#2DB3FE',
    borderColor: '#2DB3FE',
    borderWidth: 1,
  },
  textInputColorSeven: {
    color: '#FEE92D',
    borderColor: '#FEE92D',
    borderWidth: 1,
  },
  textInputColorAit: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  additionalInfoContainer: {
    paddingTop: 35,
  },
  button: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default styles;
