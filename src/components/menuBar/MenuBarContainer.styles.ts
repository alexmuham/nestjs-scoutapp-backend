import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40,
    height: 120,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 120,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  left: {
    position: 'absolute',
    left: '0%',
  },
  right: {
    position: 'absolute',
    right: '0%',
  },
  menuItem: {
    padding: 20,
  },
});

export default styles;
