import {StyleSheet, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  textInputColorTwo: {
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
  },
  textInputColorTree: {
    color: '#A61911',
    borderColor: '#A61911',
    borderWidth: 1,
  },
  textInputColorFore: {
    color: '#FEB72D',
    borderColor: '#FEB72D',
    borderWidth: 1,
  },
  textInputColorFife: {
    color: '#00B13C',
    borderColor: '#00B13C',
    borderWidth: 1,
  },
  textInputColorSix: {
    color: '#2DB3FE',
    borderColor: '#2DB3FE',
    borderWidth: 1,
  },
  textInputColorSeven: {
    color: '#FEE92D',
    borderColor: '#FEE92D',
    borderWidth: 1,
  },
  textInputColorAit: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
});

export const itemColor = (item: string, style: ViewStyle) => {
  switch (item) {
    case '2': {
      return {...style, ...styles.textInputColorTwo};
    }
    case '3': {
      return {...style, ...styles.textInputColorTree};
    }
    case '4': {
      return {...style, ...styles.textInputColorFore};
    }
    case '5': {
      return {...style, ...styles.textInputColorFife};
    }
    case '6': {
      return {...style, ...styles.textInputColorSix};
    }
    case '7': {
      return {...style, ...styles.textInputColorSeven};
    }
    case '8': {
      return {...style, ...styles.textInputColorAit};
    }
    default: {
      return {...style};
    }
  }
};
