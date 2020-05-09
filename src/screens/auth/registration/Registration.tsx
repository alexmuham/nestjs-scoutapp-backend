import React, {useState} from 'react';
import {CheckBox, ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import AuthCard from '../components/authCard/AuthCard';
import AuthInputField from '../components/authInputField/AuthInputField';
import styles from './Registration.styles';
import TextLink from '../components/textLink/TextLink';
// import {useAuthActions} from '../../../state/hooks/UseActions';

const Registration: React.FC = () => {
  const {t} = useTranslation('registration');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [education, setEducation] = useState<string>('');

  const [acceptValue, setAccept] = useState<boolean>(false);

  const bottomText = () => (
    <View style={styles.bottomTextContainer}>
      <Text>Already have an account? </Text>
      <TextLink
        styleText={styles.textLink}
        onPress={() => undefined}
        text={t('signIn')}
      />
    </View>
  );

  // const actions = useAuthActions();

  // const confirmActions = () => {
  //   actions.registerUser({education, lastName, firstName, email, phoneNumber, password});
  // };

  return (
    <AuthCard
      // buttonPress={() => confirmActions()}
      buttonPress={() => undefined}
      buttonTitle={t('signUp')}
      bottomText={bottomText()}
      title={t('signUp')}
      centralContainerStyles={styles.centralContainer}
    >
      <View>
        <ScrollView>
          <AuthInputField
            value={firstName}
            onChangeText={(value) => {
              setFirstName(value);
            }}
            placeholder={t('firstName')}
          />
          <AuthInputField
            value={lastName}
            onChangeText={(value) => {
              setLastName(value);
            }}
            placeholder={t('lastName')}
          />
          <AuthInputField
            value={email}
            onChangeText={(value) => {
              setEmail(value);
            }}
            placeholder={t('email')}
          />
          <AuthInputField
            value={phoneNumber}
            onChangeText={(value) => {
              setPhoneNumber(value);
            }}
            placeholder={t('phoneNumber')}
          />
          <AuthInputField
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder={t('password')}
            type="password"
          />
          <AuthInputField
            value={confirmPassword}
            onChangeText={(value) => {
              setConfirmPassword(value);
            }}
            placeholder={t('confirmPassword')}
            type="password"
          />
          <AuthInputField
            value={education}
            onChangeText={(value) => {
              setEducation(value);
            }}
            placeholder={t('education')}
          />
        </ScrollView>
        <View style={styles.bottomTextContainer}>
          <CheckBox
            style={styles.checkBox}
            value={acceptValue}
            onValueChange={(value) => setAccept(!value)}
          />
          <Text style={styles.bottomText}>{t('I accept Scout')}</Text>
          <TextLink onPress={() => undefined} text={t('terms of service')} />
          <Text style={styles.bottomText}>{t('and')}</Text>
          <TextLink onPress={() => undefined} text={t('private police')} />
        </View>
      </View>
    </AuthCard>
  );
};

export default Registration;
