import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  nav: {
    marginTop: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    marginLeft: 90,
    marginRight: 105,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  flatList: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navElementTitle: {
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
  },
  navElement: {
    flexGrow: 1,
    width: '33%',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5,
  },
  navActiveElem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  navActiveElementTitle: {
    color: '#A61911',
  },
});

export default styles;
