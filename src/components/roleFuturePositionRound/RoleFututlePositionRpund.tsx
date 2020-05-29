import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './RoleFututlePositionRpund.styles';

interface RoleFuturePositionRoundProps {
  positionText: string;
  positionValue: string;
  positionSetValue: (value: string) => void;

  roundText: string;
  roundValue: string;
  roundSetValue: (value: string) => void;

  gamesText: string;
  gamesValue: string;
  gamesSetValue: (value: string) => void;

  inningsText: string;
  inningsValue: string;
  inningsSetValue: (value: string) => void;

  ABsText: string;
  ABsValue: string;
  AbsSetValue: (value: string) => void;

  rawText: string;
  rawValue: string;
  rawSetValue: (value: string) => void;

  adjText: string;
  adjValue: string;
  adjSetValue: (value: string) => void;

  currentText: string;
  currentValue: string;
  currentSetValue: (value: string) => void;

  futureText: string;
  futureValue: string;
  futureSetValue: (value: string) => void;
}

const RoleFuturePositionRound: React.FC<RoleFuturePositionRoundProps> = ({
  positionValue,
  positionSetValue,
  positionText,
  adjSetValue,
  adjText,
  adjValue,
  AbsSetValue,
  ABsText,
  ABsValue,
  currentSetValue,
  currentText,
  currentValue,
  futureSetValue,
  futureText,
  futureValue,
  gamesSetValue,
  gamesText,
  gamesValue,
  inningsSetValue,
  inningsText,
  inningsValue,
  rawSetValue,
  rawText,
  rawValue,
  roundSetValue,
  roundText,
  roundValue,
}) => {
  const renderItem = (
    title: string,
    value: string,
    setValue: (value: string) => void,
  ) => {
    return (
      <View style={styles.renderItemContainer}>
        <Text style={styles.renderItemText}>{title}</Text>
        <View>
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#929292"
            style={value.length < 1 ? styles.textInputEmpty : styles.textInputFull}
            onChangeText={setValue}
            value={value}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        {renderItem(positionText, positionValue, positionSetValue)}
        {renderItem(roundText, roundValue, roundSetValue)}
      </View>
      <View style={styles.itemsContainer}>
        {renderItem(gamesText, gamesValue, gamesSetValue)}
        {renderItem(inningsText, inningsValue, inningsSetValue)}
        {renderItem(ABsText, ABsValue, AbsSetValue)}
      </View>
      <View style={styles.itemsContainer}>
        {renderItem(rawText, rawValue, rawSetValue)}
        {renderItem(adjText, adjValue, adjSetValue)}
        {renderItem(currentText, currentValue, currentSetValue)}
        {renderItem(futureText, futureValue, futureSetValue)}
      </View>
    </View>
  );
};

export default RoleFuturePositionRound;
