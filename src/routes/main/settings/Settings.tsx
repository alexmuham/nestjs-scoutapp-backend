import React, {useEffect} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import {RequireLoadable} from 'components';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import PreferencesSwitch from 'components/switch/PreferencesSwitch';
import {useTranslation} from 'react-i18next';
import {Arrow} from './assets';

const Settings: React.FC = () => {
  const {t} = useTranslation('settings');

  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchPreferences();
  }, []);

  const preferences = useSelector((state) => state.preferences);

  const SwitchLine = (props: {
    titleKey: string;
    value: boolean;
    onPress: (value: boolean) => void;
  }) => (
    <>
      <LineProperty
        text={() => <Text>{t(props.titleKey)}</Text>}
        element={() => <PreferencesSwitch value={props.value} onPress={props.onPress} />}
      />
      <View style={styles.horizontalLine} />
    </>
  );

  const renderLink = () => {
    return (
      <View style={styles.rightImageContainer}>
        <Image source={Arrow} style={styles.rightImageContainer} />
      </View>
    );
  };

  const LinkLine = (props: {titleKey: string}) => (
    <View style={styles.preferencesContainer}>
      <TouchableOpacity>
        <LineProperty
          text={() => <Text>{t(props.titleKey)}</Text>}
          element={() => renderLink()}
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
            return (
              <>
                <View style={styles.preferencesContainer}>
                  <SwitchLine
                    titleKey="Friend Request"
                    value={preferences.enableFriendRequestNotification}
                    onPress={() =>
                      actions.updatePreferences({
                        enableFriendRequestNotification: !preferences.enableFriendRequestNotification,
                      })
                    }
                  />
                  <SwitchLine
                    titleKey="Player(s) matching"
                    value={preferences.enablePlayerMatchingNotification}
                    onPress={() =>
                      actions.updatePreferences({
                        enablePlayerMatchingNotification: !preferences.enablePlayerMatchingNotification,
                      })
                    }
                  />
                  <SwitchLine
                    titleKey="Messages"
                    value={preferences.enableMessageNotification}
                    onPress={() =>
                      actions.updatePreferences({
                        enableMessageNotification: !preferences.enableMessageNotification,
                      })
                    }
                  />
                  <SwitchLine
                    titleKey="Send notifications to email"
                    value={preferences.sendNotificationsToEmail}
                    onPress={() =>
                      actions.updatePreferences({
                        sendNotificationsToEmail: !preferences.sendNotificationsToEmail,
                      })
                    }
                  />
                </View>
                <LinkLine titleKey="Edit Profile" />
                <LinkLine titleKey="Log Out" />
              </>
            );
          }}
        </RequireLoadable>
      </ScrollView>
    </View>
  );
};

export default Settings;
