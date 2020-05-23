import RegisterRequest from 'auth/RegisterRequest';
import ApiRegisterRequest from 'api/entities/RegisterRequest';
import LoginRequest from '@spryrocks/react-auth/LoginRequest';
import ApiLoginRequest from 'api/entities/LoginRequest';
import {Account} from 'entities/Account';
import Preferences from 'entities/Preferences';
import User from 'entities/User';
import {
  User as GQLUser,
  Player as GQLPlayer,
  Account as GQLAccount,
  Preferences as GQLPreferences,
  PgEventResults as GQLPGEventResults,
  CareerProgressions as GQLCareerProgressions,
  PercentileRankings as GQLPercentileRankings,
  Ranking as GQLRanking,
} from './graphql/types';
import Player from 'entities/Player';
import PercentileRankings, {Ranking} from 'entities/PercentileRankings';
import CareerProgressions from 'entities/CareerProgressions';
import PGEventResults from 'entities/PGEventResults';

export const mapRankingFormGQL = (raking: GQLRanking): Ranking => ({
  id: raking.id,
  average: raking.average,
  percentile: raking.percentile,
  top: raking.top,
});

export const mapPercentileRankingsFormGQL = (
  percentileRankings: GQLPercentileRankings,
): PercentileRankings => ({
  id: percentileRankings.id,
  IF: percentileRankings.IF ? mapRankingFormGQL(percentileRankings.IF) : undefined,
  FB: percentileRankings.FB ? mapRankingFormGQL(percentileRankings.FB) : undefined,
  C: percentileRankings.C ? mapRankingFormGQL(percentileRankings.C) : undefined,
  oneB: percentileRankings.oneB ? mapRankingFormGQL(percentileRankings.oneB) : undefined,
  pop: percentileRankings.pop ? mapRankingFormGQL(percentileRankings.pop) : undefined,
  sixty: percentileRankings.sixty
    ? mapRankingFormGQL(percentileRankings.sixty)
    : undefined,
  tenSPL: percentileRankings.tenSPL
    ? mapRankingFormGQL(percentileRankings.tenSPL)
    : undefined,
});

export const mapCareerProgressionsFormGQL = (
  careerProgressions: GQLCareerProgressions,
): CareerProgressions => ({
  id: careerProgressions.id,
});

export const mapPGEventResultsFormGQL = (
  pGEventResults: GQLPGEventResults,
): PGEventResults => ({
  id: pGEventResults.id,
  exitVelocity: pGEventResults.exitVelocity ? pGEventResults.exitVelocity : undefined,
  fastballVelocity: pGEventResults.fastballVelocity
    ? pGEventResults.fastballVelocity
    : undefined,
  infieldVelocity: pGEventResults.infieldVelocity
    ? pGEventResults.infieldVelocity
    : undefined,
  sixtyYdDash: pGEventResults.sixtyYdDash ? pGEventResults.sixtyYdDash : undefined,
  tenYdSplit: pGEventResults.tenYdSplit ? pGEventResults.tenYdSplit : undefined,
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
  images: player.images,
  careerProgressions: player.careerProgressions
    ? mapCareerProgressionsFormGQL(player.careerProgressions)
    : undefined,
  percentileRankings: player.percentileRankings
    ? mapPercentileRankingsFormGQL(player.percentileRankings)
    : undefined,
  pGEventResults: player.pGEventResults
    ? mapPGEventResultsFormGQL(player.pGEventResults)
    : undefined,
});

export const mapPlayersFromGQL = (players: GQLPlayer[]): Player[] => {
  return players.map((player) => mapPlayerFromGQL(player));
};

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
  image: user.image ? user.image : undefined,
  players: user.players ? mapPlayersFromGQL(user.players) : undefined,
});

export const mapUsersFromGQL = (users: GQLUser[]): User[] => {
  return users.map((user) => mapUserFromGQL(user));
};

export const mapAccountFromGQL = (account: GQLAccount): Account => ({
  user: mapUserFromGQL(account.user),
});

export const mapPreferencesFromGQL = (preferences: GQLPreferences): Preferences => ({
  id: preferences.id,
  enableFriendRequestNotification: preferences.enableFriendRequestNotification,
  enablePlayerMatchingNotification: preferences.enablePlayerMatchingNotification,
  enableMessageNotification: preferences.enableMessageNotification,
  sendNotificationsToEmail: preferences.sendNotificationsToEmail,
  players: preferences.players,
});
