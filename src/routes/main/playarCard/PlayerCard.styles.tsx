import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 35,
    width: '75%',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    color: '#A61911',
    fontSize: 25,
  },
  contact: {
    paddingRight: 10,
  },
  playerInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  playerImages: {
    flex: 1,
  },
  info: {
    flex: 1,
  },
  renderInfoContainer: {
    flexDirection: 'row',
  },
  playerAvatar: {
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: '90%',
  },
});

export default styles;
