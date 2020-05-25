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
import InputField from '../inputField/InputField';

interface PlayerListProps {
  friends: User[];
  title?: string;
  styleContainer?: ViewStyle;
  navigateActions?: () => void;
  mode: 'list' | 'edit';
  editAction?: () => void;
  deleteAction?: (id: string) => void;
  inviteAction?: () => void;
  massageActions?: (id: string) => void;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  searchValue?: string;
}

const FriedList: React.FC<PlayerListProps> = ({
  friends,
  title,
  styleContainer,
  navigateActions,
  mode,
  editAction,
  deleteAction,
  massageActions,
  inviteAction,
  placeholder,
  searchValue,
  onChangeText,
}) => {
  const {t} = useTranslation('playerList');

  const renderItem = (
    text: string,
    image: ImageSourcePropType | undefined,
    action?: () => void,
  ) => {
    return (
      <TouchableOpacity style={styles.editContainer} onPress={action}>
        <>
          <Text style={styles.numberOfFriendsText}>{text}</Text>
          {image && <Image source={image} />}
        </>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...styleContainer, ...styles.container}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        {mode === 'list' && (
          <TouchableOpacity onPress={inviteAction}>
            <Image source={FriendListImages.Invite} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.inputFieldContainer}>
        <InputField
          placeholder={placeholder}
          value={searchValue}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.numberOfFriendsText}>{`${friends.length} ${t(
          'friends',
        )}`}</Text>
        {mode === 'list' &&
          renderItem(t('editList'), FriendListImages.Arrow, navigateActions)}
        {mode === 'edit' && renderItem(t('save'), undefined, editAction)}
      </View>
      <View style={styles.friendList}>
        <FlatList
          data={friends}
          renderItem={({item}) => (
            <FriendItem
              friend={item}
              deleteActions={deleteAction}
              massageActions={massageActions}
              mode={mode}
            />
          )}
        />
      </View>
    </View>
  );
};

export default FriedList;
