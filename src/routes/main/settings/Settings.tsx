import React, {useEffect, Suspense} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MenuBar} from 'components';
import {MenuBarItems} from 'navigation';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {useHistory} from 'react-router';
import PreferencesSwitch from 'components/switch/PreferencesSwitch';

const Settings: React.FC = () => {
  const history = useHistory();

  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchPreferences();
  }, []);

  const preferences = useSelector((state) => state.preferences);

  const renderTextForLineProperty = (title: string) => {
    return <Text>{title}</Text>;
  };

  const changeEnableFriendRequestNotification = {
    enableFriendRequestNotification: !preferences.enableFriendRequestNotification,
  };

  const changeEnablePlayerMatchingNotification = {
    enablePlayerMatchingNotification: !preferences.enablePlayerMatchingNotification,
  };

  const changeEnableMessageNotification = {
    enableMessageNotification: !preferences.enableMessageNotification,
  };

  const changeSendNotificationsToEmail = {
    sendNotificationsToEmail: !preferences.sendNotificationsToEmail,
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
              return actions.updatePreferences(changeEnableFriendRequestNotification);
            case 'enablePlayerMatchingNotification':
              return actions.updatePreferences(changeEnablePlayerMatchingNotification);
            case 'enableMessageNotification':
              return actions.updatePreferences(changeEnableMessageNotification);
            case 'sendNotificationsToEmail':
              return actions.updatePreferences(changeSendNotificationsToEmail);
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
    <View style={styles.flex}>
      <MenuBar
        leftIcons={[MenuBarItems.Friends(history)]}
        rightIcons={[MenuBarItems.Settings(history)]}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Notification settings</Text>
        <Suspense fallback={<Text>Loading...</Text>}>
          <View>
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
          </View>
        </Suspense>
      </ScrollView>
    </View>
  );
};

export default Settings;
