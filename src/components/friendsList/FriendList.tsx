import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './FriemdList.styles';
import {useTranslation} from 'react-i18next';
import * as FriendListImages from './assets';
import User from 'entities/User';

interface PlayerListProps {
  friends: User[];
  title?: string;
  styleContainer?: ViewStyle;
  navigateActions?: () => void;
  mode: 'list' | 'edit';
  editAction?: () => void;
}

const FriedList: React.FC<PlayerListProps> = ({
  friends,
  title,
  styleContainer,
  navigateActions,
  mode,
  editAction,
}) => {
  const {t} = useTranslation('playerList');

  // const playerList = (friends: Player, number: number) => {
  //   switch (mode) {
  //     case 'list': {
  //       return <></>;
  //     }
  //     case 'edit': {
  //       return <></>;
  //     }
  //     default: {
  //       return <></>;
  //     }
  //   }
  // };

  const renderItem = (text: string, image: ImageSourcePropType, action?: () => void) => {
    return (
      <TouchableOpacity style={styles.editContainer} onPress={action}>
        <>
          <Text style={styles.numberOfPlayersText}>{text}</Text>
          <Image source={image} />
        </>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...styleContainer, ...styles.container}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.numberOfPlayersText}>{`${friends.length} ${t(
          'friends',
        )}`}</Text>
        {mode === 'list' &&
          renderItem(t('editList'), FriendListImages.Invite, navigateActions)}
        {mode === 'edit' && renderItem(t('save'), FriendListImages.Invite, editAction)}
      </View>
      <ScrollView>
        <View style={styles.playerListContainer} />
      </ScrollView>
    </View>
  );
};

export default FriedList;
