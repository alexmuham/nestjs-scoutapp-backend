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
    actions.fetchNotificationsSettings();
  }, []);

  const notifications = useSelector((state) => state.notifications);

  const renderTextForLineProperty = (title: string) => {
    return <Text>{title}</Text>;
  };

  const changeFriendRequest = {
    friendRequest: !notifications.friendRequest,
  };

  const changePlayersMatching = {
    playersMatching: !notifications.playersMatching,
  };

  const changeMessages = {
    messages: !notifications.messages,
  };

  const changeSendNotificationsToEmail = {
    sendNotificationsToEmail: !notifications.sendNotificationsToEmail,
  };

  const renderSwitch = (
    name: 'friendRequest' | 'playersMatching' | 'messages' | 'sendNotificationsToEmail',
    dbState: boolean,
  ) => {
    return (
      <PreferencesSwitch
        switchState={dbState}
        onPress={() => {
          switch (name) {
            case 'friendRequest':
              return actions.updateNotificationsSettings(changeFriendRequest);
            case 'playersMatching':
              return actions.updateNotificationsSettings(changePlayersMatching);
            case 'messages':
              return actions.updateNotificationsSettings(changeMessages);
            case 'sendNotificationsToEmail':
              return actions.updateNotificationsSettings(changeSendNotificationsToEmail);
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

  // @ts-ignore
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
              <View style={styles.notificationsContainer}>
                <LineProperty
                  text={() => renderTextForLineProperty('Friend Request')}
                  element={() =>
                    renderSwitch('friendRequest', notifications.friendRequest)
                  }
                />
                <View style={styles.horizontalLine} />
                <LineProperty
                  text={() => renderTextForLineProperty('Player(s) matching')}
                  element={() =>
                    renderSwitch('playersMatching', notifications.playersMatching)
                  }
                />
                <View style={styles.horizontalLine} />
                <LineProperty
                  text={() => renderTextForLineProperty('Messages')}
                  element={() => renderSwitch('messages', notifications.messages)}
                />
                <View style={styles.horizontalLine} />
                <LineProperty
                  text={() => renderTextForLineProperty('Send notifications to email')}
                  element={() =>
                    renderSwitch(
                      'sendNotificationsToEmail',
                      notifications.sendNotificationsToEmail,
                    )
                  }
                />
              </View>
              <View style={styles.notificationsContainer}>
                <TouchableOpacity>
                  <LineProperty
                    text={() => renderTextForLineProperty('Edit Profile')}
                    element={() => renderLink()}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.notificationsContainer}>
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
