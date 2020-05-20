import User from 'entities/User';
import GQLUser from './user/User';
import Account from '../../entities/Account';
import GQLAccount from './account/Account';
import Preferences from 'entities/Preferences';
import GQLPlayer from './player/Player';
import Player from 'entities/Player';
import GQLPreferences from './user/Preferences';

export const mapUserToGQL = (user: User): GQLUser => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    education: user.education,
    email: user.email,
    preferencesId: user.preferencesId,
    players: user.players,
  };
};

export const mapPreferencesToGQL = (preferences: Preferences): GQLPreferences => ({
  id: preferences.id,
  enableFriendRequestNotification: preferences.enableFriendRequestNotification,
  enablePlayerMatchingNotification: preferences.enablePlayerMatchingNotification,
  enableMessageNotification: preferences.enableMessageNotification,
  sendNotificationsToEmail: preferences.sendNotificationsToEmail,
});

export const mapAccountToGQL = (account: Account): GQLAccount => ({
  user: mapUserToGQL(account.user),
  preferences: mapPreferencesToGQL(account.preferences),
});

export const mapPlayerToGQL = (player: Player): GQLPlayer => ({
  id: player.id,
  name: player.name,
  weight: player.weight,
  throws: player.throws,
  statePositionRanking: player.statePositionRanking,
  stateOverallRanking: player.stateOverallRanking,
  primaryPosition: player.primaryPosition,
  nationalPositionRanking: player.nationalPositionRanking,
  nationalOverallRanking: player.nationalOverallRanking,
  highSchoolContactPhone: player.highSchoolContactPhone,
  highSchool: player.highSchool,
  height: player.height,
  graduatingClass: player.graduatingClass,
  externalId: player.externalId,
  contactPhone: player.contactPhone,
  collegeCommitment: player.collegeCommitment,
  bats: player.bats,
});

export const mapPlayersToGQL = (players: Player[]): GQLPlayer[] =>
  players.map((player) => mapPlayerToGQL(player));
