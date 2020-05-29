import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
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
  textAreaContainerStyle: {
    flex: 1,
    marginVertical: 8,
  },
  textAreaContainer: {
    height: 250,
    flex: 1,
  },
  attachVideo: {
    paddingVertical: 10,
  },
  notesContainer: {
    paddingTop: 30,
    flex: 1,
  },
  notesText: {
    fontSize: 25,
    paddingLeft: 5,
  },
});

export default styles;
