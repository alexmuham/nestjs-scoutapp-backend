import React from 'react';
import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './ReportsHeader.styles';
import {useTranslation} from 'react-i18next';
import * as ReportsImages from './assets';
import {MaskInput} from 'components';
import {TextInputMaskOptionProp} from 'react-native-masked-text';

const MaskType = 'datetime';
const MaskOptions: TextInputMaskOptionProp = {format: 'MM/DD/YYYY'};

interface ReportsHeaderProps {
  goBackAction: () => void;
  dateValue: string;
  setDateValue: (value: string) => void;
  doneActions?: () => void;
  mode: 'pro' | 'gen';
  style?: ViewStyle;
}

const ReportsHeader: React.FC<ReportsHeaderProps> = ({
  setDateValue,
  dateValue,
  goBackAction,
  doneActions,
  mode,
  style,
}) => {
  const {t} = useTranslation('reports');

  return (
    <View style={style}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.reports} onPress={() => goBackAction()}>
          <Image source={ReportsImages.LeftArrow} />
          <Text style={styles.reportsText}>{t('reports')}</Text>
        </TouchableOpacity>
        {mode === 'gen' && doneActions && (
          <TouchableOpacity onPress={() => doneActions()}>
            <Text style={styles.reportsText}>{t('done')}</Text>
          </TouchableOpacity>
        )}
        {mode === 'pro' && (
          <View>
            <Text style={styles.reportsText}>{t('draft')}</Text>
          </View>
        )}
      </View>
      <View>
        <MaskInput
          type={MaskType}
          options={MaskOptions}
          placeholder="mm/dd/yyyy"
          value={dateValue}
          onChangeText={(value) => {
            setDateValue(value);
          }}
          rightImage={ReportsImages.Calendar}
          rightImageContainerStyle={styles.rightImageContainerStyle}
          rightImageStyle={styles.rightImageStyle}
          containerStyle={styles.maskInput}
          textStyle={styles.maskInputStyle}
          style={styles.maskInputContainer}
        />
      </View>
    </View>
  );
};

export default ReportsHeader;
