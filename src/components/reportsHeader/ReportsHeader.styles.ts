import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  reports: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportsText: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#A61911',
  },
  maskInput: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  rightImageContainerStyle: {
    position: 'absolute',
    right: 10,
  },
  rightImageStyle: {},
  maskInputStyle: {
    padding: 10,
  },
  maskInputContainer: {
    padding: 10,
  },
});

export default styles;
