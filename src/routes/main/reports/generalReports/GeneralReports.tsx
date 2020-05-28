import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './GeneralReports.styles';
import {useTranslation} from 'react-i18next';
import * as ReportsImages from '../assets';
import {ReportsHeader, TextArea} from 'components';
import {useRouterActions} from 'state/hooks/UseActions';
import {showVideoPicker} from '../../../../utils/ImagePickerUtil';

const GeneralReports: React.FC = () => {
  const {t} = useTranslation('general');
  const routerActions = useRouterActions();

  const [dateValue, setDateValue] = useState<string>('');

  const [notesValue, setNotes] = useState<string>('');

  const attachVideo = async () => {
    const result = await showVideoPicker();
    if (!result.cancelled) {
      // await actions.addVideoToGeneralPlayer(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ReportsHeader
          goBackAction={routerActions.goBack}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
        <View style={styles.notesContainer}>
          <View>
            <Text style={styles.notesText}>{t('notes')}</Text>
          </View>
          <View style={styles.textAreaContainer}>
            <TextArea
              onChangeText={setNotes}
              value={notesValue}
              textAreaContainerStyle={styles.textAreaContainerStyle}
              isMultiline
              maxLength={500}
              numberOfLines={100}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.attachVideo} onPress={() => attachVideo()}>
        <Image source={ReportsImages.AttachVideo} />
      </TouchableOpacity>
    </View>
  );
};

export default GeneralReports;
