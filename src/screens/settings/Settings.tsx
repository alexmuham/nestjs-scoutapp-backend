import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MenuBar} from 'components';
import {MenuBarItems} from 'navigation';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import {RequireLoadable} from 'components/index';

const Settings: React.FC = () => {
  const [friendRequest, setFriendRequest] = useState<undefined | boolean>(undefined);
  const [messages, setMessages] = useState<undefined | boolean>(undefined);
  const [playersMatching, setPlayersMatching] = useState<undefined | boolean>(undefined);
  const [sendNotificationsToEmail, setSendNotificationsToEmail] = useState<
    undefined | boolean
  >(undefined);

  const renderTextForLineProperty = (title: string) => {
    return <Text>{title}</Text>;
  };

  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchNotificationsSettings();
  }, [friendRequest, messages, playersMatching, sendNotificationsToEmail]);

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
                      switchState={friendRequest || notifications.account.friendRequest}
                      onPress={() => {
                        if (friendRequest) {
                          setFriendRequest(!friendRequest);
                        } else {
                          setFriendRequest(!notifications.account.friendRequest);
                        }

                        actions.updateNotificationsSettings({
                          friendRequest: friendRequest
                            ? !friendRequest
                            : !notifications.account.friendRequest,
                          messages: messages || notifications.account.messages,
                          playersMatching:
                            playersMatching || notifications.account.playersMatching,
                          sendNotificationsToEmail:
                            sendNotificationsToEmail ||
                            notifications.account.sendNotificationsToEmail,
                        });
                      }}
                    />
                    <View style={styles.horizontalLine} />
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() => renderTextForLineProperty('Player(s) matching')}
                      switchState={notifications.account.playersMatching}
                      onPress={() => {
                        if (playersMatching) {
                          setPlayersMatching(!playersMatching);
                        } else {
                          setPlayersMatching(!notifications.account.playersMatching);
                        }

                        actions.updateNotificationsSettings({
                          friendRequest:
                            friendRequest || notifications.account.friendRequest,
                          messages: messages || notifications.account.messages,
                          playersMatching: !notifications.account.playersMatching,
                          sendNotificationsToEmail:
                            sendNotificationsToEmail ||
                            notifications.account.sendNotificationsToEmail,
                        });
                      }}
                    />
                    <View style={styles.horizontalLine} />
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() => renderTextForLineProperty('Messages')}
                      switchState={notifications.account.messages}
                      onPress={() => {
                        if (messages) {
                          setMessages(!messages);
                        } else {
                          setMessages(!notifications.account.messages);
                        }

                        actions.updateNotificationsSettings({
                          friendRequest:
                            friendRequest || notifications.account.friendRequest,
                          messages: !notifications.account.messages,
                          playersMatching:
                            playersMatching || notifications.account.playersMatching,
                          sendNotificationsToEmail:
                            sendNotificationsToEmail ||
                            notifications.account.sendNotificationsToEmail,
                        });
                      }}
                    />
                    <View style={styles.horizontalLine} />
                    <LineProperty
                      functionalityType="switch"
                      leftElement={() =>
                        renderTextForLineProperty('Send notifications to email')
                      }
                      switchState={notifications.account.sendNotificationsToEmail}
                      onPress={() => {
                        if (sendNotificationsToEmail) {
                          setSendNotificationsToEmail(!sendNotificationsToEmail);
                        } else {
                          setSendNotificationsToEmail(
                            !notifications.account.sendNotificationsToEmail,
                          );
                        }

                        actions.updateNotificationsSettings({
                          friendRequest:
                            friendRequest || notifications.account.friendRequest,
                          messages: messages || notifications.account.messages,
                          playersMatching:
                            playersMatching || notifications.account.playersMatching,
                          sendNotificationsToEmail: !notifications.account
                            .sendNotificationsToEmail,
                        });
                      }}
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
