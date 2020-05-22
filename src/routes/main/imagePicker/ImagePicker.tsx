import React from 'react';
import {Button} from 'components/index';
import showImagePicker from 'utils/ImagePickerUtil';
import {useImagePickerActions, useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import styles from './ImagePicker.styles';
import {View} from 'react-native';
import {useParams} from 'react-router-native';

const ImagePicker: React.FC = () => {
  const {t} = useTranslation('imagePickerPopUp');
  const routerActions = useRouterActions();
  const actions = useImagePickerActions();
  const {id} = useParams();

  const avatarPress = async (options: 'camera' | 'gallery') => {
    const result = await showImagePicker(options); // TODO add permission (camera, gallery)
    if (!result.cancelled) {
      await actions.addImageToPlayer(id, result.uri);
    }
  };
  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.topButton}>
          <Button
            visualStyle="none"
            textStyle={styles.button}
            title={t('camera')}
            onPress={() => avatarPress('camera')}
          />
          <Button
            textStyle={styles.button}
            visualStyle="none"
            title={t('gallery')}
            onPress={() => avatarPress('gallery')}
          />
        </View>
        <View style={styles.cancelButton}>
          <Button
            visualStyle="none"
            title={t('cancel')}
            textStyle={styles.cancelButtonText}
            onPress={() => routerActions.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

export default ImagePicker;
