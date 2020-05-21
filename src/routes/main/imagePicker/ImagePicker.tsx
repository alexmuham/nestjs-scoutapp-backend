import React from 'react';
import {Button} from 'components/index';
import {ModalContent, ModalFooter, ModalButton} from 'react-native-modals';
import showImagePicker from 'utils/ImagePickerUtil';
import {useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import styles from './ImagePicker.styles';
import {View} from 'react-native';

const ImagePicker: React.FC = () => {
  const {t} = useTranslation('imagePickerPopUp');
  const routerActions = useRouterActions();

  const avatarPress = async (options: 'camera' | 'gallery') => {
    const result = await showImagePicker(options); // TODO add permission (camera, gallery)
    if (!result.cancelled) {
      // actions.confirm()
    }
  };
  return (
    <View>
      <ModalContent>
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
      </ModalContent>
      <ModalFooter>
        <ModalButton text={t('cancel')} onPress={() => routerActions.goBack()} />
      </ModalFooter>
    </View>
  );
};

export default ImagePicker;
