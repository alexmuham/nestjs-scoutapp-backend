import React, {useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RequireLoadable} from 'components';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import PreferencesSwitch from 'components/switch/PreferencesSwitch';

const Settings: React.FC = () => {
  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchPreferences();
  }, []);

  const {preferences} = useSelector((state) => state);

  const renderTextForLineProperty = (title: string) => {
    return <Text>{title}</Text>;
  };

  const changeEnableFriendRequestNotification = (
    enableFriendRequestNotification: boolean,
  ) => {
    return {
      enableFriendRequestNotification: !enableFriendRequestNotification,
    };
  };

  const changeEnablePlayerMatchingNotification = (
    enablePlayerMatchingNotification: boolean,
  ) => {
    return {
      enablePlayerMatchingNotification: !enablePlayerMatchingNotification,
    };
  };

  const changeEnableMessageNotification = (enableMessageNotification: boolean) => {
    return {
      enableMessageNotification: !enableMessageNotification,
    };
  };

  const changeSendNotificationsToEmail = (sendNotificationsToEmail: boolean) => {
    return {
      enablePlayerMatchingNotification: !sendNotificationsToEmail,
    };
  };

  const renderSwitch = (
    name:
      | 'enableFriendRequestNotification'
      | 'enablePlayerMatchingNotification'
      | 'enableMessageNotification'
      | 'sendNotificationsToEmail',
    dbState: boolean,
  ) => {
    return (
      <PreferencesSwitch
        switchState={dbState}
        onPress={() => {
          switch (name) {
            case 'enableFriendRequestNotification':
              return actions.updatePreferences(
                changeEnableFriendRequestNotification(dbState),
              );
            case 'enablePlayerMatchingNotification':
              return actions.updatePreferences(
                changeEnablePlayerMatchingNotification(dbState),
              );
            case 'enableMessageNotification':
              return actions.updatePreferences(changeEnableMessageNotification(dbState));
            case 'sendNotificationsToEmail':
              return actions.updatePreferences(changeSendNotificationsToEmail(dbState));
          }
        }}
      />
    );
  };

  const renderLink = () => {
    return (
      <View style={styles.rightImageContainer}>
        {/* <Image source={Arrow} style={styles.rightImageContainer} /> */}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notification settings</Text>
      <RequireLoadable data={preferences}>
        {(preferences) => {
          return (
            <View>
              <View style={styles.preferencesContainer}>
                <LineProperty
                  text={() => renderTextForLineProperty('Friend Request')}
                  element={() =>
                    renderSwitch(
                      'enableFriendRequestNotification',
                      preferences.enableFriendRequestNotification,
                    )
                  }
                />
                <View style={styles.horizontalLine} />
                <LineProperty
                  text={() => renderTextForLineProperty('Player(s) matching')}
                  element={() =>
                    renderSwitch(
                      'enablePlayerMatchingNotification',
                      preferences.enablePlayerMatchingNotification,
                    )
                  }
                />
                <View style={styles.horizontalLine} />
                <LineProperty
                  text={() => renderTextForLineProperty('Messages')}
                  element={() =>
                    renderSwitch(
                      'enableMessageNotification',
                      preferences.enableMessageNotification,
                    )
                  }
                />
                <View style={styles.horizontalLine} />

                <LineProperty
                  text={() => renderTextForLineProperty('Send preferences to email')}
                  element={() =>
                    renderSwitch(
                      'sendNotificationsToEmail',
                      preferences.sendNotificationsToEmail,
                    )
                  }
                />
              </View>
              <View style={styles.preferencesContainer}>
                <TouchableOpacity>
                  <LineProperty
                    text={() => renderTextForLineProperty('Edit Profile')}
                    element={() => renderLink()}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.preferencesContainer}>
                <TouchableOpacity>
                  <LineProperty
                    text={() => renderTextForLineProperty('Log Out')}
                    element={() => renderLink()}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </RequireLoadable>
    </ScrollView>
  );
};

export default Settings;
