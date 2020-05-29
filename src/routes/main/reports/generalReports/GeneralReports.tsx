import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './GeneralReports.styles';
import {useTranslation} from 'react-i18next';
import * as ReportsImages from '../assets';
import {ReportsHeader, TextArea, VideoContainer} from 'components';
import {useGeneralReportsActions, useRouterActions} from 'state/hooks/UseActions';
import {showVideoPicker} from 'utils/ImagePickerUtil';
import {useSelector} from 'state/hooks';
import {useParams} from 'react-router-native';
import {MaskService, TextInputMaskOptionProp} from 'react-native-masked-text';

const MaskType = 'datetime';
const MaskOptions: TextInputMaskOptionProp = {format: 'MM/DD/YYYY'};

const GeneralReports: React.FC = () => {
  const {t} = useTranslation('general');
  const routerActions = useRouterActions();
  const actions = useGeneralReportsActions();
  const {id} = useParams();

  const [dateValue, setDateValue] = useState<string>('');

  const [notesValue, setNotes] = useState<string>('');

  const {files} = useSelector((state) => state.genReports);

  const attachVideo = async () => {
    const result = await showVideoPicker();
    if (!result.cancelled) {
      await actions.addVideoToGeneralReports(result.uri);
    }
  };

  const getDateByString = (value: string): Date | undefined => {
    if (!MaskService.isValid(MaskType, value, MaskOptions)) return undefined;
    const rawString = MaskService.toRawValue(MaskType, value, MaskOptions);
    return new Date(rawString);
  };

  const confirm = () => {
    const date = getDateByString(dateValue);
    actions.addGeneralReports(notesValue, date, files ? files.filesIds : undefined, id);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ReportsHeader
          goBackAction={routerActions.goBack}
          dateValue={dateValue}
          setDateValue={setDateValue}
          doneActions={confirm}
          mode="gen"
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
          {files && (
            <View>
              <FlatList
                horizontal
                data={files.filesUris}
                renderItem={({item}) => (
                  <VideoContainer uri={item} containerStyle={styles.videoContainer} />
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.attachVideo} onPress={() => attachVideo()}>
        <Image source={ReportsImages.AttachVideo} />
      </TouchableOpacity>
    </View>
  );
};

export default GeneralReports;
