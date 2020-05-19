import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {MenuBar} from 'components';
import {MenuBarItems} from 'navigation';
import LineProperty from 'components/lineProperty/LineProperty';
import styles from './Settings.styles';
import {useSettingsActions} from 'state/hooks/UseActions';
import {useSelector} from 'state/hooks';
import PreferencesSwitch from 'components/switch/PreferencesSwitch';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router';

const Settings: React.FC = () => {
  const {t} = useTranslation('settings');

  const history = useHistory();

  const actions = useSettingsActions();

  useEffect(() => {
    actions.fetchPreferences();
  }, []);

  const {preferences} = useSelector((state) => state);

  const SwitchLine = (props: {
    titleKey: string;
    value: boolean;
    onPress: (value: boolean) => void;
    enabled: boolean;
  }) => (
    <>
      <LineProperty
        text={() => <Text>{t(props.titleKey)}</Text>}
        element={() => <PreferencesSwitch value={props.value} onPress={props.onPress} />}
      />
      <View style={styles.horizontalLine} />
    </>
  );

  return (
    <View style={styles.flex}>
      <MenuBar
        leftIcons={[MenuBarItems.Friends(history)]}
        rightIcons={[MenuBarItems.Settings(history)]}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Notification settings</Text>
        <View style={styles.preferencesContainer}>
          <SwitchLine
            titleKey="Player(s) matching"
            value={preferences.enablePlayerMatchingNotification}
            onPress={(value) =>
              actions.updatePreferences({enablePlayerMatchingNotification: value})
            }
          />

          {/*  <LineProperty */}
          {/*    text={() => renderTextForLineProperty('Messages')} */}
          {/*    element={() => */}
          {/*      renderSwitch( */}
          {/*        'enableMessageNotification', */}
          {/*        preferences.enableMessageNotification, */}
          {/*      ) */}
          {/*    } */}
          {/*  /> */}
          {/*  <View style={styles.horizontalLine} /> */}
          {/*  <LineProperty */}
          {/*    text={() => renderTextForLineProperty('Send preferences to email')} */}
          {/*    element={() => */}
          {/*      renderSwitch( */}
          {/*        'sendNotificationsToEmail', */}
          {/*        preferences.sendNotificationsToEmail, */}
          {/*      ) */}
          {/*    } */}
          {/*  /> */}
          {/* </View> */}
          {/* <View style={styles.preferencesContainer}> */}
          {/*  <TouchableOpacity> */}
          {/*    <LineProperty */}
          {/*      text={() => renderTextForLineProperty('Edit Profile')} */}
          {/*      element={() => renderLink()} */}
          {/*    /> */}
          {/*  </TouchableOpacity> */}
          {/* </View> */}
          {/* <View style={styles.preferencesContainer}> */}
          {/*  <TouchableOpacity> */}
          {/*    <LineProperty */}
          {/*      text={() => renderTextForLineProperty('Log Out')} */}
          {/*      element={() => renderLink()} */}
          {/*    /> */}
          {/*  </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
