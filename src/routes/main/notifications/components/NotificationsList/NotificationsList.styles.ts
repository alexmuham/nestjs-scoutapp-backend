import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  daysContainer: {
    flex: 2,
  },
  dayTitle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#A61911',
  },
  notificationsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  notificationItem: {
    paddingVertical: 30,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F8F8F8',
  },
  shadow: {
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,

    elevation: 4,
  },
  notificationItemTitle: {
    marginHorizontal: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
  },
  notificationItemTime: {
    position: 'absolute',
    bottom: 6,
    right: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#AAAAAA',
  },
  notificationItemNew: {
    position: 'absolute',
    top: 10,
    right: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    color: '#EF550A',
  },
});

export default styles;
