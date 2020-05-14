import RegisterRequest from 'auth/RegisterRequest';
import ApiRegisterRequest from 'api/entities/RegisterRequest';
import LoginRequest from '@spryrocks/react-auth/LoginRequest';
import ApiLoginRequest from 'api/entities/LoginRequest';
import {Account} from 'entities/Account';
import Notifications from 'entities/Notifications';
import User from 'entities/User';
import {
  User as GQLUser,
  Player as GQLPlayer,
  Account as GQLAccout,
} from './graphql/types';
import Player from 'entities/Player';

export const mapRegisterRequestToApi = (
  registerRequest: RegisterRequest,
): ApiRegisterRequest => ({
  firstName: registerRequest.firstName,
  lastName: registerRequest.lastName,
  education: registerRequest.education,
  email: registerRequest.email,
  password: registerRequest.password,
  phoneNumber: registerRequest.phoneNumber,
});

export const mapLoginRequestToApi = (loginRequest: LoginRequest): ApiLoginRequest => ({
  email: loginRequest.email,
  password: loginRequest.password,
});

export const mapUserFromGQL = (user: GQLUser): User => ({
  id: user.id,
  email: user.email,
  education: user.education,
  phoneNumber: user.phoneNumber,
  lastName: user.lastName,
  firstName: user.firstName,
});

export const mapMyAccountFromGQL = (account: GQLAccout): Account => ({
  user: mapUserFromGQL(account.user),
});

export const mapPlayerFromGQL = (player: GQLPlayer): Player => ({
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

export const mapPlayersFromGQL = (players: GQLPlayer[]): Player[] => {
  return players.map((player) => mapPlayerFromGQL(player));
};

export const mapMyNotificationsSettingsFromGQL = (notifications: any): Notifications => ({
  id: notifications.id,
  friendRequest: notifications.friendRequest,
  playersMatching: notifications.playersMatching,
  messages: notifications.messages,
  sendNotificationsToEmail: notifications.sendNotificationsToEmail,
});
