import {Player} from 'database/entities';

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
    // statistics: object,
  ): Promise<void>;

  abstract getPlayerById(playerId: string): Promise<Player | undefined>;

  abstract getPlayers(): Promise<Player[] | undefined>;
}
