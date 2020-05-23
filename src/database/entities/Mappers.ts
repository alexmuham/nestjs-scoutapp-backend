import DbUser from './User';
import DbPlayer from './Player';
import DbPreferences from './Preferences';
import DbPercentileRankings from './PercentileRankings';
import DbRaking from './Ranking';
import DbCareerProgressions from './CareerProgressions';
import DbPGEventResults from './PGEventResults';
import PercentileRankings, {Ranking} from 'entities/PercentileRankings';
import User from 'entities/User';
import Account from 'entities/Account';
import Preferences from 'entities/Preferences';
import Player from 'entities/Player';
import CareerProgressions from 'entities/CareerProgressions';
import PGEventResults from 'entities/PGEventResults';
import File from './File';

export const mapRankingFormDb = (raking: DbRaking): Ranking => ({
  id: raking.id,
  average: raking.average,
  percentile: raking.percentile,
  top: raking.top,
});

export const mapPercentileRankingsFormDb = (
  percentileRankings: DbPercentileRankings,
): PercentileRankings => ({
  id: percentileRankings.id,
  IF: percentileRankings.IF ? mapRankingFormDb(percentileRankings.IF) : undefined,
  FB: percentileRankings.FB ? mapRankingFormDb(percentileRankings.FB) : undefined,
  C: percentileRankings.C ? mapRankingFormDb(percentileRankings.C) : undefined,
  oneB: percentileRankings.oneB ? mapRankingFormDb(percentileRankings.oneB) : undefined,
  pop: percentileRankings.pop ? mapRankingFormDb(percentileRankings.pop) : undefined,
  sixty: percentileRankings.sixty
    ? mapRankingFormDb(percentileRankings.sixty)
    : undefined,
  tenSPL: percentileRankings.tenSPL
    ? mapRankingFormDb(percentileRankings.tenSPL)
    : undefined,
});

export const mapCareerProgressionsFormDb = (
  careerProgressions: DbCareerProgressions,
): CareerProgressions => ({
  id: careerProgressions.id,
  progress: careerProgressions.progress,
});

export const mapPGEventResultsFormDb = (
  pGEventResults: DbPGEventResults,
): PGEventResults => ({
  id: pGEventResults.id,
  exitVelocity: pGEventResults.exitVelocity,
  fastballVelocity: pGEventResults.fastballVelocity,
  infieldVelocity: pGEventResults.infieldVelocity,
  sixtyYdDash: pGEventResults.sixtyYdDash,
  tenYdSplit: pGEventResults.tenYdSplit,
});

export const mapPlayersImagesFromDB = (images: File[]) => images.map((i) => i.id);

export const mapPlayerImagesFromDB = (images: File[]) => {
  const files = images.filter((item) => item !== null);
  if (files.length > 0) {
    return mapPlayersImagesFromDB(files);
  }
};

export const mapUserPlayersFromDB = (user: DbPlayer[]) => user.map((i) => i.id);

export const mapUserPlayerFromDB = (user: DbPlayer[]) => {
  const files = user.filter((item) => item !== null);
  if (files.length > 0) {
    return mapUserPlayersFromDB(files);
  }
};

export const mapPlayerFormDb = (
  player: DbPlayer,
  percentileRankings?: DbPercentileRankings,
): Player => ({
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
  careerProgressions: player.careerProgressions
    ? mapCareerProgressionsFormDb(player.careerProgressions)
    : undefined,
  percentileRankings: percentileRankings
    ? mapPercentileRankingsFormDb(percentileRankings)
    : undefined,
  pGEventResults: player.pGEventResults
    ? mapPGEventResultsFormDb(player.pGEventResults)
    : undefined,
  images: player.images ? mapPlayerImagesFromDB(player.images) : [],
});

export const mapPlayersFormDb = (players: DbPlayer[]): Player[] => {
  return players.map((player) => {
    return mapPlayerFormDb(player);
  });
};

export const mapPreferencesFromDb = (
  preferences: DbPreferences,
  players: DbPlayer[],
): Preferences => ({
  id: preferences.id,
  enableFriendRequestNotification: preferences.enableFriendRequestNotification,
  enablePlayerMatchingNotification: preferences.enablePlayerMatchingNotification,
  enableMessageNotification: preferences.enableMessageNotification,
  sendNotificationsToEmail: preferences.sendNotificationsToEmail,
  players: players ? mapUserPlayerFromDB(players) : [],
});

export const mapUserFromDb = (user: DbUser): User => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phoneNumber: user.phoneNumber,
  preferencesId: user.preferencesId,
  email: user.email,
  education: user.education,
  players: user.players ? mapPlayersFormDb(user.players) : [],
  image: user.image ? user.image.id : user.imageId,
});

export const mapUsersFromDb = (users: DbUser[]): User[] => {
  return users.map((user) => {
    return mapUserFromDb(user);
  });
};

export const mapAccountFromDb = (
  account: DbUser,
  preferences: DbPreferences,
): Account => ({
  user: mapUserFromDb(account),
  preferences: mapPreferencesFromDb(preferences, account.players),
});
