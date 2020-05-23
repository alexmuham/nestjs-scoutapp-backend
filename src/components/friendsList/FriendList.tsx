import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './FriemdList.styles';
import {useTranslation} from 'react-i18next';
import * as FriendListImages from './assets';
import User from 'entities/User';
import FriendItem from './friendItem/FriendItem';
import EditFriendItem from './friendEditItem/EditFriendItem';

interface PlayerListProps {
  friends: User[];
  title?: string;
  styleContainer?: ViewStyle;
  navigateActions?: () => void;
  mode: 'list' | 'edit';
  editAction?: () => void;
  deleteAction?: (id: string) => void;
}

const FriedList: React.FC<PlayerListProps> = ({
  friends,
  title,
  styleContainer,
  navigateActions,
  mode,
  editAction,
  deleteAction,
}) => {
  const {t} = useTranslation('playerList');

  const playerList = (friend: User) => {
    switch (mode) {
      case 'list': {
        return <FriendItem friend={friend} />;
      }
      case 'edit': {
        return <EditFriendItem friend={friend} deleteActions={deleteAction} />;
      }
      default: {
        return <></>;
      }
    }
  };

  const renderItem = (text: string, image: ImageSourcePropType, action?: () => void) => {
    return (
      <TouchableOpacity style={styles.editContainer} onPress={action}>
        <>
          <Text style={styles.numberOfFriendsText}>{text}</Text>
          <Image source={image} />
        </>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...styleContainer, ...styles.container}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        {mode === 'list' && (
          <TouchableOpacity>
            <Image source={FriendListImages.Invite} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.numberOfFriendsText}>{`${friends.length} ${t(
          'friends',
        )}`}</Text>
        {mode === 'list' &&
          renderItem(t('editList'), FriendListImages.Arrow, navigateActions)}
        {mode === 'edit' && renderItem(t('save'), FriendListImages.Arrow, editAction)}
      </View>
      <View style={styles.friendList}>
        <FlatList data={friends} renderItem={({item}) => playerList(item)} />
      </View>
    </View>
  );
};

export default FriedList;
