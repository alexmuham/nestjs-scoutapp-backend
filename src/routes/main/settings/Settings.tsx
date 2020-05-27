import React, {useEffect} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import {RequireLoadable} from 'components';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {
  useAuthActions,
  useRouterActions,
  useSettingsActions,
} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {useTranslation} from 'react-i18next';
import {Arrow} from './assets';
import NotificationSettings from './notificationSettings/NotificationSettings';

const Settings: React.FC = () => {
  const {t} = useTranslation('settings');

  const actions = useSettingsActions();
  const authActions = useAuthActions();
  const routerActions = useRouterActions();

  useEffect(() => {
    actions.fetchPreferences();
  }, []);

  const preferences = useSelector((state) => state.preferences);

  const linkLine = (titleKey: string, onPress: () => void) => (
    <View style={styles.preferencesContainer}>
      <TouchableOpacity onPress={onPress}>
        <LineProperty
          text={() => <Text>{titleKey}</Text>}
          element={() => (
            <View style={styles.rightImageContainer}>
              <Image source={Arrow} style={styles.rightImageContainer} />
            </View>
          )}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Notification settings</Text>
        <RequireLoadable data={preferences}>
          {(preferences) => {
            const {
              enableFriendRequestNotification,
              enableMessageNotification,
              enablePlayerMatchingNotification,
              sendNotificationsToEmail,
            } = preferences;
            return (
              <>
                {NotificationSettings({
                  enableFriendRequestNotification,
                  enableMessageNotification,
                  enablePlayerMatchingNotification,
                  sendNotificationsToEmail,
                })}
                {linkLine(t('editProfile'), () => routerActions.navigateToEditProfile())}
                {linkLine(t('logOut'), () => authActions.logout())}
              </>
            );
          }}
        </RequireLoadable>
      </ScrollView>
    </View>
  );
};

export default Settings;
