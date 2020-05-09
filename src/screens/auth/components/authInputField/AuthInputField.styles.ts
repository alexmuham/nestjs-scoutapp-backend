import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: '4%',
    width: '100%',
  },

  textInput: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingTop: 14,
    borderBottomWidth: 1,
    color: '#A61911',
  },

  textInputEmpty: {
    borderBottomColor: '#A61911',
  },

  textInputFull: {
    borderBottomColor: '#A61911',
  },

  placeholder: {
    fontSize: 16,
    padding: 0,
    margin: 0,
  },

  showHidePasswordContainer: {
    position: 'absolute',
    right: 12,
    width: 15,
    top: 8,
    alignItems: 'flex-start',
  },

  pass: {
    marginTop: 7,
  },
});

export default styles;
