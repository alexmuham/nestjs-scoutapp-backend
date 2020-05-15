import DBUser from './User';
import DBPlayer from './Player';
import User from 'entities/User';
import Account from 'entities/Account';
import Preferences from 'entities/Preferences';
import Player from 'entities/Player';
import DbUser from './User';
import DbNotifications from './Notifications';
import Notifications from '../../entities/Notifications';

export const mapNotificationsFromDB = (
  notifications: DbNotifications,
): Notifications => ({
  id: notifications.id,
  friendRequest: notifications.friendRequest || undefined,
  playersMatching: notifications.playersMatching || undefined,
  messages: notifications.messages || undefined,
  sendNotificationsToEmail: notifications.sendNotificationsToEmail || undefined,
});

export const mapUserFromDb = (user: DBUser): User => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phoneNumber: user.phoneNumber,
  notificationsId: user.notificationsId,
  email: user.email,
  education: user.education,
});

export const mapPreferencesFromDB = (user: DBUser): Preferences => ({
  allowNotifications: user.allowNotifications,
});

export const mapAccountFromDB = (
    account: DbUser,
    notifications: DbNotifications,
): Account => ({
  user: mapUserFromDb(account),
  notifications: mapNotificationsFromDB(notifications),
});

export const mapPlayerFormDB = (player: DBPlayer): Player => ({
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

export const mapPlayersFormDB = (players: DBPlayer[]): Player[] => {
  return players.map((player) => {
    return mapPlayerFormDB(player);
  });
};
