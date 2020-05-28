import {
  File,
  Player,
  Ranking,
  PercentileRankings as DbPercentileRankings,
  CareerProgressions as DbCareerProgressions,
  PGEventResults as DbPGEventResults,
  Reports,
} from 'database/entities';

export default abstract class IPlayerStore {
  abstract uploadPlayersData(
    name: string,
    externalId: string,
    height: string,
    weight: string,
    bats: string,
    throws: string,
    graduatingClass: string,
    primaryPosition: string,
    highSchool: string,
    contactPhone: string,
    highSchoolContactPhone: string,
    statePositionRanking: string,
    stateOverallRanking: string,
    nationalPositionRanking: string,
    nationalOverallRanking: string,
    collegeCommitment: string,
    percentileRankingsId: string,
    pGEventResultsId: string,
    careerProgressionsId: string,
    reports: Reports,
  ): Promise<void>;

  abstract addPercentileRankings(
    FBId?: string,
    CId?: string,
    oneBId?: string,
    tenSPLId?: string,
    sixtyId?: string,
    IFId?: string,
    popId?: string,
  ): Promise<DbPercentileRankings>;

  abstract createRanking(
    top?: string,
    percentile?: string,
    average?: string,
  ): Promise<Ranking>;

  abstract addPGEventResults(
    tenYdSplit?: string,
    exitVelocity?: string,
    sixtyYdDash?: string,
    fastballVelocity?: string,
    infieldVelocity?: string,
  ): Promise<DbPGEventResults>;

  abstract addCareerProgressions(progress: string): Promise<DbCareerProgressions>;

  abstract getPlayerById(playerId: string): Promise<Player | undefined>;

  abstract getPlayerByIdOrThrow(playerId: string): Promise<Player>;

  abstract getPercentileRankingsById(
    id: string,
  ): Promise<DbPercentileRankings | undefined>;

  abstract getPlayers(): Promise<Player[] | undefined>;

  abstract addPlayerImage(image: File[], playerId: string): Promise<void>;
}
