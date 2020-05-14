import React, {useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MenuBar} from 'components';
import {MenuBarItems} from 'navigation';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {RequireLoadable} from 'components/index';

const Settings: React.FC = () => {
  const renderTextForLineProperty = (title: string) => {
    return <Text>{title}</Text>;
  };

  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchNotificationsSettings();
  }, []);

  const notifications = useSelector((state) => state.notifications);

  // @ts-ignore
  return (
    <View style={styles.flex}>
      <MenuBar leftIcons={[MenuBarItems.Friends]} rightIcons={[MenuBarItems.Settings]} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Notification settings</Text>
        <RequireLoadable data={notifications}>
          {(notifications: any) => {
            return (
              <View>
                <View>
                  <View style={styles.notificationsContainer}>
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() => renderTextForLineProperty('Friend Request')}
                      switchState={notifications.account.friendRequest}
                      // onPress={() => {
                      //   actions.updateNotificationsSettings(
                      //     {
                      //       allowNotifications: !data.allowNotifications,
                      //     },
                      //     notificationText,
                      //   );
                      // }}
                    />
                    <View style={styles.horizontalLine} />
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() => renderTextForLineProperty('Player(s) matching')}
                      switchState={notifications.account.playersMatching}
                    />
                    <View style={styles.horizontalLine} />
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() => renderTextForLineProperty('Messages')}
                      switchState={notifications.account.messages}
                    />
                    <View style={styles.horizontalLine} />
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() =>
                        renderTextForLineProperty('Send notifications to email')
                      }
                      switchState={notifications.account.sendNotificationsToEmail}
                    />
                  </View>
                  <View style={styles.notificationsContainer}>
                    <TouchableOpacity>
                      <LineProperty
                        functionalityType="link"
                        leftElement={() => renderTextForLineProperty('Edit Profile')}
                        switchState
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.notificationsContainer}>
                    <TouchableOpacity>
                      <LineProperty
                        functionalityType="link"
                        leftElement={() => renderTextForLineProperty('Log Out')}
                        switchState
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        </RequireLoadable>
      </ScrollView>
    </View>
  );
};

export default Settings;
