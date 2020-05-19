import {
  createQuery,
  createQueryWithVariables,
  createMutationWithVariables,
} from '@spryrocks/react-api/graphql/Query';
import {gql} from 'apollo-boost';
import {
  Account,
  Player,
  QueryPlayerByIdArgs,
  MutationUpdatePreferencesArgs,
  Preferences,
  MutationDeletePlayersToUserArgs,
  MutationAddPlayerToUserArgs,
} from './types';
import UpdatePreferences from '../entities/UpdatePreferences';

const UserFragment = () => gql`
  fragment User on User {
    education
    email
    firstName
    id
    lastName
    phoneNumber
  }
`;

const PlayerFragment = () => gql`
  fragment Player on Player {
    id
    bats
    collegeCommitment
    contactPhone
    externalId
    graduatingClass
    height
    highSchool
    highSchoolContactPhone
    name
    nationalOverallRanking
    nationalPositionRanking
    primaryPosition
    stateOverallRanking
    throws
    weight
  }
`;

const PreferencesFragment = () => gql`
  fragment Preferences on Preferences {
    id
    enableFriendRequestNotification
    enablePlayerMatchingNotification
    enableMessageNotification
    sendNotificationsToEmail
  }
`;

export const myAccountQuery = createQuery<{myAccount: Account}, Account>(
  gql`
    ${UserFragment()}
    query myAccount {
      account {
        user {
          ...User
        }
      }
    }
  `,
  ({myAccount}) => myAccount,
);

export const preferencesQuery = createQuery<{preferences: Preferences}, Preferences>(
  gql`
    ${PreferencesFragment()}
    query preferences {
      preferences {
        ...Preferences
      }
    }
  `,
  ({preferences}) => preferences,
);

export const playerByIdQuery = createQueryWithVariables<
  QueryPlayerByIdArgs,
  {playerById: Player},
  Player
>(
  gql`
    ${PlayerFragment()}
    query playerById($playerId: String!) {
      playerById(playerId: $playerId) {
        ...Player
      }
    }
  `,
  ({playerById}) => playerById,
);

export const playersQuery = createQuery<{getPlayers: [Player]}, [Player]>(
  gql`
    ${PlayerFragment()}
    query getPlayers {
      getPlayers {
        ...Player
      }
    }
  `,
  ({getPlayers}) => getPlayers,
);

export const deletePlayerMutation = createMutationWithVariables<
  MutationDeletePlayersToUserArgs,
  {deletePlayersToUser: boolean},
  boolean
>(
  gql`
    mutation deletePlayersToUser($playersIds: [String!]!) {
      deletePlayersToUser(playersIds: $playersIds)
    }
  `,
  ({deletePlayersToUser}) => deletePlayersToUser,
);

export const addPlayerMutation = createMutationWithVariables<
  MutationAddPlayerToUserArgs,
  {addPlayerToUser: boolean},
  boolean
>(
  gql`
    mutation addPlayerToUser($playerId: String!) {
      addPlayerToUser(playerId: $playerId)
    }
  `,
  ({addPlayerToUser}) => addPlayerToUser,
);

export const userPlayersQuery = createQuery<{playersFromUser: [Player]}, [Player]>(
  gql`
    ${PlayerFragment()}
    query playersFromUser {
      playersFromUser {
        ...Player
      }
    }
  `,
  ({playersFromUser}) => playersFromUser,
);

export const mutationUpdatePreferences = createMutationWithVariables<
  MutationUpdatePreferencesArgs,
  UpdatePreferences,
  UpdatePreferences
>(
  gql`
    ${PreferencesFragment()}
    mutation updatePreferences(
      $enableFriendRequestNotification: Boolean
      $enablePlayerMatchingNotification: Boolean
      $enableMessageNotifications: Boolean
      $sendNotificationsToEmail: Boolean
    ) {
      updatePreferences(
        enableFriendRequestNotification: $enableFriendRequestNotification
        enablePlayerMatchingNotification: $enablePlayerMatchingNotification
        enableMessageNotification: $enableMessageNotifications
        sendNotificationsToEmail: $sendNotificationsToEmail
      ) {
        ...Preferences
      }
    }
  `,
  (updatePreferences) => updatePreferences,
);
