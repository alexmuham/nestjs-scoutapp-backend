import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './Invite.styles';
import {Text, View} from 'react-native';
import {Button, PopUpContainer} from 'components';
import AuthInputField from '../../../auth/components/authInputField/AuthInputField';
import {useRouterActions} from 'state/hooks/UseActions';

const Invite: React.FC = () => {
  const {t} = useTranslation('invite');
  const routerAction = useRouterActions();
  const [emailValue, setEmailValue] = useState('');

  return (
    <PopUpContainer style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{t('inviting')}</Text>
      </View>
      <View style={styles.inputFieldContainer}>
        <AuthInputField
          value={emailValue}
          onChangeText={(value) => {
            setEmailValue(value);
          }}
          placeholder={t('enterEmail')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          visualStyle="none"
          onPress={() => routerAction.goBack()}
          title={t('cancel')}
          style={styles.cancelButton}
          textStyle={styles.cancelButtonText}
        />
        <Button visualStyle="solid" onPress={() => undefined} title={t('invite')} />
      </View>
    </PopUpContainer>
  );
};

export default Invite;
