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
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 35,
    width: '75%',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  backTouchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    color: '#A61911',
    fontSize: 25,
  },
  contact: {
    paddingRight: 20,
  },
  playerInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  playerImages: {
    flex: 0.9,
    alignItems: 'flex-start',
  },
  info: {
    flex: 1.1,
  },
  renderInfoContainer: {
    flexDirection: 'row',
  },
  playerAvatar: {
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 150,
  },
  smallImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImage: {
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    width: 30,
    height: 40,
  },
  additionalInfo: {
    flex: 1,
    paddingTop: 10,
  },
  additionalInfoTitle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  additionalInfoLeftItem: {
    width: '60%',
  },
  additionalInfoRightItem: {
    width: '40%',
  },
  additionalInfoContext: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  additionalInfoTContext: {
    paddingTop: 5,
  },
  bottomContainer: {
    paddingTop: 20,
  },
  reportsItem: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  bottomContainerText: {
    fontSize: 23,
  },
  reportsItemContainer: {
    paddingVertical: 20,
    paddingLeft: 5,
  },
  upcomingGamesContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcomingGamesText: {
    color: '#C0C0C0',
    fontSize: 17,
  },
});

export default styles;
