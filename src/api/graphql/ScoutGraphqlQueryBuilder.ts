import {createQuery, createQueryWithVariables} from '@spryrocks/react-api/graphql/Query';
import {gql} from 'apollo-boost';
import {Account, Player, QueryPlayerByIdArgs} from './types';
import {Account, Notifications} from './types';

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

export const myNotificationsSettingsQuery = createQuery<
  {myNotificationsSettings: Notifications},
  Notifications
>(
  gql`
    query myNotificationsSettings {
      myNotificationsSettings {
        id
        friendRequest
        messages
        playersMatching
        sendNotificationsToEmail
      }
    }
  `,
  ({myNotificationsSettings}) => myNotificationsSettings,
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
