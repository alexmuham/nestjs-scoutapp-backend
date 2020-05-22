import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './Friends.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';

const Friends: React.FC = () => {
  const {t} = useTranslation('friends');

  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchPreferences();
  }, []);

  return (
    <View style={styles.flex}>
      <View>
        <Text>{t('friends')}</Text>
      </View>
    </View>
  );
};

export default Friends;
