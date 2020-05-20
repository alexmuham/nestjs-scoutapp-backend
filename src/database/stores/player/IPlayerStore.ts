import {Player, RankingsValue} from 'database/entities';
import DbPercentileRankings from 'database/entities/PercentileRankings';
import DbCareerProgressions from 'database/entities/CareerProgressions';
import DbPGEventResults from 'database/entities/PGEventResults';

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
  ): Promise<RankingsValue>;

  abstract addPGEventResults(
    tenYdSplit?: string,
    exitVelocity?: string,
    sixtyYdDash?: string,
    fastballVelocity?: string,
    infieldVelocity?: string,
  ): Promise<DbPGEventResults>;

  abstract addCareerProgressions(): Promise<DbCareerProgressions>;

  abstract getPlayerById(playerId: string): Promise<Player | undefined>;

  abstract getPlayerByIdOrThrow(playerId: string): Promise<Player>;

  abstract getPlayers(): Promise<Player[] | undefined>;
}
