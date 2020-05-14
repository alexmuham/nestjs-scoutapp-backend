import User from 'entities/User';
import GQLUser from './user/User';
import Account from '../../entities/Account';
import GQLAccount from './account/Account';
import Preferences from 'entities/Preferences';
import GQLPlayer from './player/Player';
import Player from 'entities/Player';
import Notifications from 'entities/Notifications';
import GQLNotifications from './user/Notifications';

export const mapUserToGQL = (user: User): GQLUser => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    education: user.education,
    email: user.email,
    notificationsId: user.notificationsId,
  };
};

export const mapNotificationsToGQL = (
  notifications: Notifications,
): GQLNotifications => ({
  id: notifications.id,
  friendRequest: notifications.friendRequest,
  playersMatching: notifications.playersMatching,
  messages: notifications.messages,
  sendNotificationsToEmail: notifications.sendNotificationsToEmail,
});

export const mapAccountToGQL = (account: Account): GQLAccount => ({
  user: mapUserToGQL(account.user),
  notifications: mapNotificationsToGQL(account.notifications),
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
