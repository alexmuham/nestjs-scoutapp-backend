import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from '../registration/Registration.styles';
import TextLink from '../components/textLink/TextLink';
import {useAuthActions} from '../../../state/hooks/UseActions';
import AuthCard from '../components/authCard/AuthCard';
import AuthInputField from '../components/authInputField/AuthInputField';

const ForgotPassword: React.FC = () => {
  const {t} = useTranslation('forgotPassword');

  const [email, setEmail] = useState<string>('');

  const actions = useAuthActions();

  return (
    <AuthCard
      buttonPress={() => actions.recoverPassword({email})}
      buttonTitle={t('restore')}
      title={t('restoreAccess')}
    >
      <View>
        <ScrollView>
          <AuthInputField
            value={email}
            onChangeText={(value) => {
              setEmail(value);
            }}
            placeholder={t('email')}
          />
        </ScrollView>
        <View style={styles.bottomTextContainerLogin}>
          <Text style={styles.bottomText}>{t('Remember account?')}</Text>
          <TextLink onPress={() => undefined} text={t('restore')} link="/login" />
        </View>
      </View>
    </AuthCard>
  );
};

export default ForgotPassword;
