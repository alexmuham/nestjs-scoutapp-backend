import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useSettingsActions} from 'state/hooks/UseActions';
import {Text, View} from 'react-native';
import styles from '../Settings.styles';
import {LineProperty, PreferencesSwitch} from 'components';

interface NotificationSettingsProps {
  enableFriendRequestNotification: boolean;
  enableMessageNotification: boolean;
  enablePlayerMatchingNotification: boolean;
  sendNotificationsToEmail: boolean;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  enableFriendRequestNotification,
  enableMessageNotification,
  enablePlayerMatchingNotification,
  sendNotificationsToEmail,
}) => {
  const {t} = useTranslation('settings');
  const actions = useSettingsActions();

  const [friendRequest, setFriendRequest] = useState<boolean>(
    enableFriendRequestNotification,
  );

  const [massageNotification, setMassageNotification] = useState<boolean>(
    enableMessageNotification,
  );

  const [playerMatching, setPlayerMatching] = useState<boolean>(
    enablePlayerMatchingNotification,
  );

  const [notificationToEmail, setNotificationToEmail] = useState<boolean>(
    sendNotificationsToEmail,
  );

  const renderSwitch = (leftText: string, value: boolean, onPress: () => void) => (
    <>
      <LineProperty
        text={() => <Text>{leftText}</Text>}
        element={() => <PreferencesSwitch value={value} onPress={onPress} />}
      />
      <View style={styles.horizontalLine} />
    </>
  );

  return (
    <View style={styles.preferencesContainer}>
      {renderSwitch(t('friendRequest'), friendRequest, () => {
        actions.updatePreferences({
          enableFriendRequestNotification: !friendRequest,
        });
        setFriendRequest(!friendRequest);
      })}
      {renderSwitch(t('playerMatching'), massageNotification, () => {
        actions.updatePreferences({
          enablePlayerMatchingNotification: !massageNotification,
        });
        setMassageNotification(!massageNotification);
      })}
      {renderSwitch(t('messages'), playerMatching, () => {
        actions.updatePreferences({
          enableMessageNotification: !playerMatching,
        });
        setPlayerMatching(!playerMatching);
      })}
      {renderSwitch(t('sendNotToEmail'), notificationToEmail, () => {
        actions.updatePreferences({
          sendNotificationsToEmail: !notificationToEmail,
        });
        setNotificationToEmail(!notificationToEmail);
      })}
    </View>
  );
};

export default NotificationSettings;
