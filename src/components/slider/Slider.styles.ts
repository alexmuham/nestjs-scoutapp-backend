import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  selectedStyle: {
    backgroundColor: '#A61911',
  },
  trackStyle: {
    backgroundColor: '#D5D5D5',
  },
  markerStyle: {
    width: 25,
    height: 25,
  },
  textInput: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    width: '40%',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  stick: {
    marginHorizontal: 5,
  },
  sliderContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'flex-start',
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 17,
  },
});

export default styles;
