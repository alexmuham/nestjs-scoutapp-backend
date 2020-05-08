import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import AuthCard from '../components/authCard/AuthCard';
import AuthInputField from '../components/authInputField/AuthInputField';

const Registration: React.FC = () => {
  const {t} = useTranslation('registrationDatePicker');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [education, setEducation] = useState<string>('');

  const bottomText = () => (
    <View>
      <Text>Already have an account? Sign In</Text>
    </View>
  );

  return (
    <AuthCard
      buttonPress={() => undefined}
      buttonTitle={t('signIn')}
      bottomText={bottomText()}
    >
      <View>
        <View>
          <Text>{t('SignUp')}</Text>
        </View>
        <View>
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
          />
          <AuthInputField
            value={confirmPassword}
            onChangeText={(value) => {
              setConfirmPassword(value);
            }}
            placeholder={t('phoneNumber')}
          />
          <AuthInputField
            value={education}
            onChangeText={(value) => {
              setEducation(value);
            }}
            placeholder={t('phoneNumber')}
          />
        </View>
      </View>
    </AuthCard>
  );
};

export default Registration;
