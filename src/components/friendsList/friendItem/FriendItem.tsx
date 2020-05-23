import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Friend.styles';
import {useRouterActions} from 'state/hooks/UseActions';
import User from 'entities/User';

interface ItemProps {
  friend: User;
}

const FriendItem: React.FC<ItemProps> = ({friend}) => {
  const actions = useRouterActions();

  const {id, firstName, lastName, image} = friend; // TODO ADD IMAGE

  return (
    <TouchableOpacity
      onPress={() => actions.navigateToFriend(id)}
      style={styles.container}
    >
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
    </TouchableOpacity>
  );
};

export default FriendItem;
