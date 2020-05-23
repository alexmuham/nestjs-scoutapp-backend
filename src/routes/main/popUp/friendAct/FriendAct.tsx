import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './FriendAct.styles';
import {View} from 'react-native';
import {useParams} from 'react-router-native';
import {Button, PopUpContainer} from 'components';
import {useRouterActions} from 'state/hooks/UseActions';

const FriendAct: React.FC = () => {
  const {t} = useTranslation('invite');
  const {id} = useParams();
  const actions = useRouterActions();

  return (
    <PopUpContainer style={styles.container}>
      <View style={styles.topButton}>
        <Button
          visualStyle="none"
          textStyle={styles.button}
          title={t('massage')}
          onPress={() => undefined}
        />
        <Button
          textStyle={styles.button}
          visualStyle="none"
          title={t('toFriend')}
          onPress={() => actions.navigateToFriend(id)}
        />
      </View>
      <View style={styles.cancelButton}>
        <Button
          visualStyle="none"
          title={t('cancel')}
          textStyle={styles.cancelButtonText}
          onPress={() => actions.goBack()}
        />
      </View>
    </PopUpContainer>
  );
};

export default FriendAct;
