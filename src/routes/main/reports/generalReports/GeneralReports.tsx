import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './GeneralReports.styles';
import {useTranslation} from 'react-i18next';
import * as ReportsImages from '../assets';
import {ReportsHeader, TextArea} from 'components';
import {useGeneralReportsActions, useRouterActions} from 'state/hooks/UseActions';
import {showVideoPicker} from 'utils/ImagePickerUtil';
import {useSelector} from 'state/hooks';
import Video from 'react-native-video';

const GeneralReports: React.FC = () => {
  const {t} = useTranslation('general');
  const routerActions = useRouterActions();
  const actions = useGeneralReportsActions();

  const [dateValue, setDateValue] = useState<string>('');

  const [notesValue, setNotes] = useState<string>('');

  // const [uri, setUri] = useState<string[]>([]);

  const {files} = useSelector((state) => state.genReports);

  const attachVideo = async () => {
    const result = await showVideoPicker();
    if (!result.cancelled) {
      // await uri.push(result.uri);
      // await setUri(uri);
      await actions.addVideoToGeneralReports(result.uri);
    }
  };
  // console.log(files, 'FILES');

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
          {files && (
            <View>
              <FlatList
                horizontal
                data={files.filesUris}
                renderItem={({item}) => (
                  <View>
                    <Video source={{uri: item}} />
                  </View>
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
