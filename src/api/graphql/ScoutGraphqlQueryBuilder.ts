import {createQuery, createQueryWithVariables} from '@spryrocks/react-api/graphql/Query';
import {
  createMutationWithVariables,
  createQuery,
} from '@spryrocks/react-api/graphql/Query';
import {gql} from 'apollo-boost';
import {Account, Player, QueryPlayerByIdArgs} from './types';
import {Account, Notifications} from './types';
import {Account, MutationUpdateNotificationsSettingsArgs, Notifications} from './types';
import {Account, MutationUpdatePreferencesArgs, Preferences} from './types';

const UserFragment = () => gql`
  fragment User on User {
    allowNotifications
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

export const myAccountQuery = createQuery<{myAccount: Account}, Account>(
    gql`
    ${UserFragment()}
    query myAccount {
      myAccount {
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
    query preferences {
      preferences {
        id
        enableFriendRequestNotification
        enableMessageNotification
        enablePlayerMatchingNotification
        sendNotificationsToEmail
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

export const mutationUpdateNotificationsSettings = createMutationWithVariables<
  MutationUpdateNotificationsSettingsArgs,
  Notifications,
  Notifications
export const mutationUpdatePreferences = createMutationWithVariables<
  MutationUpdatePreferencesArgs,
  Preferences,
  Preferences
>(
  gql`
    mutation updatePreferences(
      $enableFriendRequestNotification: Boolean!
      $enablePlayerMatchingNotification: Boolean!
      $enableMessageNotifications: Boolean!
      $sendNotificationsToEmail: Boolean!
    ) {
      updatePreferences(
        enableFriendRequestNotification: $enableFriendRequestNotification
        enablePlayerMatchingNotification: $enablePlayerMatchingNotification
        enableMessageNotification: $enableMessageNotifications
        sendNotificationsToEmail: $sendNotificationsToEmail
      ) {
        id
        enableFriendRequestNotification
        enableMessageNotification
        enablePlayerMatchingNotification
        sendNotificationsToEmail
      }
    }
  `,
  (updatePreferences) => updatePreferences,
);
