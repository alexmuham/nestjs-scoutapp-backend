import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: '4%',
    width: '100%',
  },

  textInput: {
    paddingVertical: 0,
    margin: 0,
    borderBottomWidth: 1,
    color: '#0433BF',
    padding: 0,
  },

  textInputEmpty: {
    borderBottomColor: '#90B3DD',
  },

  textInputFull: {
    borderBottomColor: '#0433BF',
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
    height: '100%',
    alignItems: 'flex-start',
  },

  pass: {
    marginTop: 7,
  },
});

export default styles;
