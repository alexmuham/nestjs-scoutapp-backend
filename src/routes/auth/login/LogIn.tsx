import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAuthActions} from 'state/hooks/UseActions';
import AuthCard from '../components/authCard/AuthCard';
import styles from '../registration/Registration.styles';
import AuthInputField from '../components/authInputField/AuthInputField';
import TextLink from '../components/textLink/TextLink';

const LogIn: React.FC = () => {
  const {t} = useTranslation('Login');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const bottomText = () => (
    <View style={styles.bottomTextContainer}>
      <Text>Haven’t an account?</Text>
      <TextLink
        onPress={() => undefined}
        text={t('signUp')}
        styleText={styles.textLink}
        link="/auth/registration"
      />
    </View>
  );

  const actions = useAuthActions();

  return (
    <AuthCard
      buttonPress={() => actions.login({email, password})}
      buttonTitle={t('signIn')}
      bottomText={bottomText()}
      title={t('signIn')}
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
          <AuthInputField
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder={t('password')}
            type="password"
          />
        </ScrollView>
        <View style={styles.bottomTextContainerLogin}>
          <Text style={styles.bottomText}>{t('Forget password?')}</Text>
          <TextLink
            onPress={() => undefined}
            text={t('restore')}
            link="/auth/forgotPassword"
          />
        </View>
      </View>
    </AuthCard>
  );
};

export default LogIn;
