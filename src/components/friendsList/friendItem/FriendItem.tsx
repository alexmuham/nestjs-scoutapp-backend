import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Friend.styles';
import User from 'entities/User';
import * as FriendListImages from '../assets';

interface ItemProps {
  friend: User;
  massageActions?: (id: string) => void;
  deleteActions?: (id: string) => void;
  mode?: 'edit' | 'list';
}

const FriendItem: React.FC<ItemProps> = ({
  friend,
  massageActions,
  deleteActions,
  mode,
}) => {
  const {id, firstName, lastName, image} = friend; // TODO ADD IMAGE

  return (
    <View style={styles.borderBottom}>
      <View style={styles.container}>
        <View style={styles.contextContainer}>
          <View style={styles.image}>
            {!image && (
              <Text style={styles.imageText}>{`${firstName.slice(0, 1)}${lastName.slice(
                0,
                1,
              )}`}</Text>
            )}
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.firstName}>{firstName}</Text>
            <Text>{lastName}</Text>
          </View>
        </View>
        {mode === 'edit' && (
          <TouchableOpacity
            onPress={deleteActions ? () => deleteActions(id) : () => undefined}
            style={styles.deleteFriend}
          >
            <Image source={FriendListImages.Delete} />
          </TouchableOpacity>
        )}
        {mode === 'list' && (
          <TouchableOpacity
            onPress={massageActions ? () => massageActions(id) : () => undefined}
            style={styles.deleteFriend}
          >
            <Image source={FriendListImages.Mail} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FriendItem;
