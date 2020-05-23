import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './EditFriendItem.styles';
import User from 'entities/User';
import * as FriendListImages from '../assets';

interface ItemProps {
  friend: User;
  deleteActions?: (id: string) => void;
}

const EditFriendItem: React.FC<ItemProps> = ({friend, deleteActions}) => {
  const {id, firstName, lastName, image} = friend; // TODO ADD IMAGE

  return (
    <View style={styles.borderBottom}>
      <View style={styles.container}>
        <View style={styles.contextContainer}>
          <View style={styles.moving}>
            <TouchableOpacity onPress={() => undefined}>
              <Image source={FriendListImages.Moving} />
            </TouchableOpacity>
          </View>
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
        <TouchableOpacity
          onPress={deleteActions ? () => deleteActions(id) : () => undefined}
          style={styles.deleteFriend}
        >
          <Image source={FriendListImages.Delete} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditFriendItem;
