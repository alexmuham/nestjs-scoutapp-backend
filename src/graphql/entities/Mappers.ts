import User from 'entities/User';
import GQLUser from './user/User';
import Account from '../../entities/Account';
import GQLAccount from './account/Account';
import Preferences from 'entities/Preferences';
import GQLPlayer from './player/Player';
import GQLRanking from './player/Ranking';
import GQLPGEventResults from './player/PGEventResults';
import GQLCareerProgressions from './player/CareerProgressions';
import GQLPercentileRankings from './player/PercentileRankings';
import Player from 'entities/Player';
import GQLPreferences from './user/Preferences';
import PercentileRankings, {Ranking} from 'entities/PercentileRankings';
import CareerProgressions from 'entities/CareerProgressions';
import PGEventResults from 'entities/PGEventResults';

export const mapRankingToGQL = (raking: Ranking): GQLRanking => ({
  id: raking.id,
  average: raking.average,
  percentile: raking.percentile,
  top: raking.top,
});

export const mapPercentileRankingsToGQL = (
  percentileRankings: PercentileRankings,
): GQLPercentileRankings => ({
  id: percentileRankings.id,
  IF: percentileRankings.IF ? mapRankingToGQL(percentileRankings.IF) : undefined,
  FB: percentileRankings.FB ? mapRankingToGQL(percentileRankings.FB) : undefined,
  C: percentileRankings.C ? mapRankingToGQL(percentileRankings.C) : undefined,
  oneB: percentileRankings.oneB ? mapRankingToGQL(percentileRankings.oneB) : undefined,
  pop: percentileRankings.pop ? mapRankingToGQL(percentileRankings.pop) : undefined,
  sixty: percentileRankings.sixty ? mapRankingToGQL(percentileRankings.sixty) : undefined,
  tenSPL: percentileRankings.tenSPL
    ? mapRankingToGQL(percentileRankings.tenSPL)
    : undefined,
});

export const mapCareerProgressionsToGQL = (
  careerProgressions: CareerProgressions,
): GQLCareerProgressions => ({
  id: careerProgressions.id,
  progress: careerProgressions.progress,
});

export const mapPGEventResultsToGQL = (
  pGEventResults: PGEventResults,
): GQLPGEventResults => ({
  id: pGEventResults.id,
  exitVelocity: pGEventResults.exitVelocity,
  fastballVelocity: pGEventResults.fastballVelocity,
  infieldVelocity: pGEventResults.infieldVelocity,
  sixtyYdDash: pGEventResults.sixtyYdDash,
  tenYdSplit: pGEventResults.tenYdSplit,
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
  pGEventResults: player.pGEventResults
    ? mapPGEventResultsToGQL(player.pGEventResults)
    : undefined,
  percentileRankings: player.percentileRankings
    ? mapPercentileRankingsToGQL(player.percentileRankings)
    : undefined,
  careerProgressions: player.careerProgressions
    ? mapCareerProgressionsToGQL(player.careerProgressions)
    : undefined,
  images: player.images ? player.images : [],
});

export const mapPlayersToGQL = (players: Player[]): GQLPlayer[] =>
  players.map((player) => mapPlayerToGQL(player));

export const mapUserToGQL = (user: User): GQLUser => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    education: user.education,
    email: user.email,
    preferencesId: user.preferencesId,
    players: user.players ? mapPlayersToGQL(user.players) : undefined,
    image: user.image,
    notifications: user.notifications ? user.notifications : undefined,
  };
};

export const mapUsersToGQL = (users: User[]): GQLUser[] =>
  users.map((user) => mapUserToGQL(user));

export const mapPreferencesToGQL = (preferences: Preferences): GQLPreferences => ({
  id: preferences.id,
  enableFriendRequestNotification: preferences.enableFriendRequestNotification,
  enablePlayerMatchingNotification: preferences.enablePlayerMatchingNotification,
  enableMessageNotification: preferences.enableMessageNotification,
  sendNotificationsToEmail: preferences.sendNotificationsToEmail,
  players: preferences.players ? preferences.players : [],
});

export const mapAccountToGQL = (account: Account): GQLAccount => ({
  user: mapUserToGQL(account.user),
  preferences: mapPreferencesToGQL(account.preferences),
});
