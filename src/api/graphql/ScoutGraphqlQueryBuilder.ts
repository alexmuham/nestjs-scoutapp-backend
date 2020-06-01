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
  MutationDeletePlayerToUserArgs,
  MutationAddPlayerImageArgs,
  MutationAddFriendArgs,
  MutationDeleteFriendArgs,
  QueryFriendByIdArgs,
  User,
  QueryPlayersBySearchParametersArgs,
  MutationAddGeneralReportsArgs,
  MutationAddProReportsArgs,
} from './types';
import UpdatePreferences from '../entities/UpdatePreferences';

const CareerProgressionsFragment = () => gql`
  fragment CareerProgressions on CareerProgressions {
    id
    progress
  }
`;

const PGEventResultsFragment = () => gql`
  fragment PGEventResults on PGEventResults {
    exitVelocity
    fastballVelocity
    id
    infieldVelocity
    sixtyYdDash
    tenYdSplit
  }
`;

const RankingFragment = () => gql`
  fragment Ranking on Ranking {
    id
    average
    percentile
    top
  }
`;

const PercentileRankingsFragment = () => gql`
  fragment PercentileRankings on PercentileRankings {
    C {
      ...Ranking
    }
    FB {
      ...Ranking
    }
    IF {
      ...Ranking
    }
    id
    oneB {
      ...Ranking
    }
    pop {
      ...Ranking
    }
    sixty {
      ...Ranking
    }
    tenSPL {
      ...Ranking
    }
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
    careerProgressions {
      ...CareerProgressions
    }
    images
    percentileRankings {
      ...PercentileRankings
    }
    pGEventResults {
      ...PGEventResults
    }
  }
`;

const UserFragment = () => gql`
  fragment User on User {
    education
    email
    firstName
    id
    lastName
    phoneNumber
    players {
      ...Player
    }
    image
  }
`;

const PreferencesFragment = () => gql`
  fragment Preferences on Preferences {
    id
    enableFriendRequestNotification
    enablePlayerMatchingNotification
    enableMessageNotification
    sendNotificationsToEmail
    players
  }
`;

export const accountQuery = createQuery<{account: Account}, Account>(
  gql`
    ${UserFragment()}
    ${PlayerFragment()}
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
    query myAccount {
      account {
        user {
          ...User
        }
      }
    }
  `,
  ({account}) => account,
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
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
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
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
    query getPlayers {
      getPlayers {
        ...Player
      }
    }
  `,
  ({getPlayers}) => getPlayers,
);

export const deletePlayersMutation = createMutationWithVariables<
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

export const deletePlayerMutation = createMutationWithVariables<
  MutationDeletePlayerToUserArgs,
  {deletePlayerToUser: boolean},
  boolean
>(
  gql`
    mutation deletePlayersToUser($playerId: String!) {
      deletePlayerToUser(playerId: $playerId)
    }
  `,
  ({deletePlayerToUser}) => deletePlayerToUser,
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
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
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
      $enableMessageNotification: Boolean
      $sendNotificationsToEmail: Boolean
    ) {
      updatePreferences(
        enableFriendRequestNotification: $enableFriendRequestNotification
        enablePlayerMatchingNotification: $enablePlayerMatchingNotification
        enableMessageNotification: $enableMessageNotification
        sendNotificationsToEmail: $sendNotificationsToEmail
      ) {
        ...Preferences
      }
    }
  `,
  (updatePreferences) => updatePreferences,
);

export const addPlayerImageMutation = createMutationWithVariables<
  MutationAddPlayerImageArgs,
  {addPlayerImage: boolean},
  boolean
>(
  gql`
    mutation addPlayerImage($playerId: String!, $imageId: String!) {
      addPlayerImage(playerId: $playerId, imageId: $imageId)
    }
  `,
  ({addPlayerImage}) => addPlayerImage,
);

export const addFriendMutation = createMutationWithVariables<
  MutationAddFriendArgs,
  {addFriend: boolean},
  boolean
>(
  gql`
    mutation addFriend($friendId: String!) {
      addFriend(friendId: $friendId)
    }
  `,
  ({addFriend}) => addFriend,
);

export const deleteFriendMutation = createMutationWithVariables<
  MutationDeleteFriendArgs,
  {deleteFriend: boolean},
  boolean
>(
  gql`
    mutation deleteFriend($friendId: String!) {
      deleteFriend(friendId: $friendId)
    }
  `,
  ({deleteFriend}) => deleteFriend,
);

export const friendQuery = createQueryWithVariables<
  QueryFriendByIdArgs,
  {friendById: User},
  User
>(
  gql`
    ${UserFragment()}
    ${PlayerFragment()}
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
    query friendById($friendId: String!) {
      friendById(friendId: $friendId) {
        ...User
      }
    }
  `,
  ({friendById}) => friendById,
);

export const friendsQuery = createQuery<{friends: [User]}, [User]>(
  gql`
    ${UserFragment()}
    ${PlayerFragment()}
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
    query friends {
      friends {
        ...User
      }
    }
  `,
  ({friends}) => friends,
);

export const playersBySearchParametersQuery = createQueryWithVariables<
  QueryPlayersBySearchParametersArgs,
  {playersBySearchParameters: [Player]},
  [Player]
>(
  gql`
    ${PlayerFragment()}
    ${PercentileRankingsFragment()}
    ${RankingFragment()}
    ${PGEventResultsFragment()}
    ${CareerProgressionsFragment()}
    query playersBySearchParameters(
      $bat: String
      $commitment: String
      $exitVelocity: [Float!]!
      $graduatingClass: [Float!]!
      $height: [Float!]!
      $name: String
      $playerThrows: String
      $position: [String!]
      $positionVelocity: String
      $sixtyTime: [Float!]!
      $tenYard: [Float!]!
      $weight: [Float!]!
    ) {
      playersBySearchParameters(
        bat: $bat
        commitment: $commitment
        exitVelocity: $exitVelocity
        graduatingClass: $graduatingClass
        height: $height
        name: $name
        playerThrows: $playerThrows
        position: $position
        positionVelocity: $positionVelocity
        sixtyTime: $sixtyTime
        tenYard: $tenYard
        weight: $weight
      ) {
        ...Player
      }
    }
  `,
  ({playersBySearchParameters}) => playersBySearchParameters,
);

export const addGeneralReportsMutation = createMutationWithVariables<
  MutationAddGeneralReportsArgs,
  {addGeneralReports: boolean},
  boolean
>(
  gql`
    mutation addGeneralReports(
      $date: DateTime!
      $notes: String!
      $playerId: String!
      $videosIds: [String!]
    ) {
      addGeneralReports(
        date: $date
        notes: $notes
        playerId: $playerId
        videosIds: $videosIds
      )
    }
  `,
  ({addGeneralReports}) => addGeneralReports,
);

export const addProReportsMutation = createMutationWithVariables<
  MutationAddProReportsArgs,
  {addProReports: boolean},
  boolean
>(
  gql`
    mutation addProReports(
      $signAbilityComment: String!
      $signAbility: String!
      $howWellSeenComment: String!
      $howWellSeen: String!
      $howWellKnownComment: String!
      $howWellKnown: String!
      $ETA: String!
      $playerId: String!
      $entryLevel: String!
      $character: String!
      $posInOrder: String!
      $fortyYard: String!
      $sixtyYard: String!
      $homeToFirst: String!
      $OFPDefense: String!
      $OFPOffense: String!
      $infield: String!
      $BP: String!
      $handEyeControl: String!
      $baseballIQ: String!
      $competitiveness: String!
      $instincts: String!
      $bodyControl: String!
      $athleticism: String!
      $aggressiveness: String!
      $canHePlayAbj: String!
      $canHePlayF: String!
      $canHePlayP: String!
      $feetAbj: String!
      $feetF: String!
      $rangeAbj: String!
      $feetP: String!
      $rangeF: String!
      $rangeP: String!
      $handsAbj: String!
      $handsF: String!
      $handsP: String!
      $fieldingAbilityAbj: String!
      $fieldingAbilityF: String!
      $fieldingAbilityP: String!
      $armStrengthAbj: String!
      $armStrengthF: String!
      $armStrengthP: String!
      $baseStealerAbj: String!
      $baseStealerF: String!
      $baseStealerP: String!
      $runningAbilityAbj: String!
      $runningAbilityF: String!
      $runningAbilityP: String!
      $rawPwrAbj: String!
      $rawPwrF: String!
      $rawPwrP: String!
      $powerFreqAbj: String!
      $powerFreqF: String!
      $powerFreqP: String!
      $hitAppTypeAbj: String!
      $hitAppTypeF: String!
      $hitAppTypeP: String!
      $hittingAbilityAdj: String!
      $hittingAbilityF: String!
      $hittingAbilityP: String!
      $playerComp: String!
      $physicalDest: String!
      $future: String!
      $current: String!
      $adj: String!
      $raw: String!
      $ABs: String!
      $innings: String!
      $games: String!
      $round: String!
      $position: String!
      $matchDate: DateTime!
      $date: DateTime!
    ) {
      addProReports(
        playerId: $playerId
        date: $date
        position: $position
        ABs: $ABs
        adj: $adj
        aggressiveness: $aggressiveness
        armStrengthAbj: $armStrengthAbj
        armStrengthF: $armStrengthF
        armStrengthP: $armStrengthP
        athleticism: $athleticism
        baseballIQ: $baseballIQ
        baseStealerAbj: $baseStealerAbj
        baseStealerF: $baseStealerF
        baseStealerP: $baseStealerP
        bodyControl: $bodyControl
        BP: $BP
        canHePlayAbj: $canHePlayAbj
        canHePlayF: $canHePlayF
        canHePlayP: $canHePlayP
        character: $character
        competitiveness: $competitiveness
        current: $current
        entryLevel: $entryLevel
        ETA: $ETA
        feetAbj: $feetAbj
        feetF: $feetF
        feetP: $feetP
        fieldingAbilityAbj: $fieldingAbilityAbj
        fieldingAbilityF: $fieldingAbilityF
        fieldingAbilityP: $fieldingAbilityP
        fortyYard: $fortyYard
        future: $future
        games: $games
        handEyeControl: $handEyeControl
        handsAbj: $handsAbj
        handsF: $handsF
        handsP: $handsP
        hitAppTypeAbj: $hitAppTypeAbj
        hitAppTypeF: $hitAppTypeF
        hitAppTypeP: $hitAppTypeP
        hittingAbilityAdj: $hittingAbilityAdj
        hittingAbilityF: $hittingAbilityF
        hittingAbilityP: $hittingAbilityP
        homeToFirst: $homeToFirst
        howWellKnown: $howWellKnown
        howWellKnownComment: $howWellKnownComment
        howWellSeen: $howWellSeen
        howWellSeenComment: $howWellSeenComment
        infield: $infield
        innings: $innings
        instincts: $instincts
        matchDate: $matchDate
        OFPDefense: $OFPDefense
        OFPOffense: $OFPOffense
        physicalDest: $physicalDest
        playerComp: $playerComp
        posInOrder: $posInOrder
        powerFreqAbj: $powerFreqAbj
        powerFreqF: $powerFreqF
        powerFreqP: $powerFreqP
        rangeAbj: $rangeAbj
        rangeF: $rangeF
        rangeP: $rangeP
        raw: $raw
        rawPwrAbj: $rawPwrAbj
        rawPwrF: $rawPwrF
        rawPwrP: $rawPwrP
        round: $round
        runningAbilityAbj: $runningAbilityAbj
        runningAbilityF: $runningAbilityF
        runningAbilityP: $runningAbilityP
        signAbility: $signAbility
        signAbilityComment: $signAbilityComment
        sixtyYard: $sixtyYard
      )
    }
  `,
  ({addProReports}) => addProReports,
);
