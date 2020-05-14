import DbUser from './User';
import DbPlayer from './Player';
import User from 'entities/User';
import Account from 'entities/Account';
import Preferences from 'entities/Preferences';
import Player from 'entities/Player';
import DbPreferences from './Preferences';

export const mapPreferencesFromDb = (preferences: DbPreferences): Preferences => ({
  id: preferences.id,
  enableFriendRequestNotification:
    preferences.enableFriendRequestNotification || undefined,
  enablePlayerMatchingNotification:
    preferences.enablePlayerMatchingNotification || undefined,
  enableMessageNotification: preferences.enableMessageNotification || undefined,
  sendNotificationsToEmail: preferences.sendNotificationsToEmail || undefined,
});

export const mapUserFromDb = (user: DbUser): User => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phoneNumber: user.phoneNumber,
  preferencesId: user.preferencesId,
  email: user.email,
  education: user.education,
  players: user.players,
});

export const mapAccountFromDb = (
  account: DbUser,
  preferences: DbPreferences,
): Account => ({
  user: mapUserFromDb(account),
  preferences: mapPreferencesFromDb(preferences),
});

export const mapPlayerFormDb = (player: DbPlayer): Player => ({
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

export const mapPlayersFormDb = (players: DbPlayer[]): Player[] => {
  return players.map((player) => {
    return mapPlayerFormDb(player);
  });
};
