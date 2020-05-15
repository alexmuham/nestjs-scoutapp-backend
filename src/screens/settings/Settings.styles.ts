import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    backgroundColor: '#E5E5E5',
  },

  title: {
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 31,
    color: '#A61911',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  notificationsContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EDEDED',
    paddingHorizontal: 12,
    marginBottom: 30,
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },

  rightImageContainer: {
    alignItems: 'flex-end',
  },
});

export default styles;
