import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import IPlayerStore from './IPlayerStore';
import {Injectable} from '@nestjs/common';
import {CareerProgressions, Player, RankingsValue} from 'database/entities';
import DbPercentileRankings from 'database/entities/PercentileRankings';
import DbPGEventResults from 'database/entities/PGEventResults';

@Injectable()
export default class PlayerStore implements IPlayerStore {
  constructor(
    @InjectRepository(Player)
    private readonly repository: Repository<Player>,
    @InjectRepository(CareerProgressions)
    private readonly careerProgressionsRepository: Repository<CareerProgressions>,
    @InjectRepository(DbPercentileRankings)
    private readonly percentileRankingsRepository: Repository<DbPercentileRankings>,
    @InjectRepository(DbPGEventResults)
    private readonly PGEventResultsRepository: Repository<DbPGEventResults>,
    @InjectRepository(RankingsValue)
    private readonly RankingsRepository: Repository<RankingsValue>,
  ) {}

  async addCareerProgressions() {
    const newCareerProgressions = this.careerProgressionsRepository.create({});
    await this.careerProgressionsRepository.insert(newCareerProgressions);
    return newCareerProgressions;
  }

  async addPGEventResults(
    tenYdSplit: string,
    exitVelocity: string,
    sixtyYdDash: string,
    fastballVelocity: string,
    infieldVelocity: string,
  ) {
    const newPGEventResults = await this.PGEventResultsRepository.create({
      tenYdSplit,
      exitVelocity,
      sixtyYdDash,
      fastballVelocity,
      infieldVelocity,
    });
    await this.PGEventResultsRepository.insert(newPGEventResults);
    return newPGEventResults;
  }

  async createRanking(top: string, percentile: string, average: string) {
    const newRanking = await this.RankingsRepository.create({
      average,
      percentile,
      top,
    });
    await this.RankingsRepository.insert(newRanking);
    return newRanking;
  }

  async addPercentileRankings(
    FBId: string,
    CId: string,
    oneBId: string,
    tenSPLId: string,
    sixtyId: string,
    IFId: string,
    popId: string,
  ) {
    const newPercentileRankings = await this.percentileRankingsRepository.create({
      FBId,
      CId,
      oneBId,
      tenSPLId,
      sixtyId,
      IFId,
      popId,
    });
    await this.percentileRankingsRepository.insert(newPercentileRankings);
    return newPercentileRankings;
  }

  async uploadPlayersData(
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
  ) {
    const newPlayer = this.repository.create({
      name,
      externalId,
      height,
      weight,
      bats,
      throws,
      graduatingClass,
      primaryPosition,
      highSchool,
      contactPhone,
      highSchoolContactPhone,
      statePositionRanking,
      stateOverallRanking,
      nationalPositionRanking,
      nationalOverallRanking,
      collegeCommitment,
      percentileRankingsId,
      pGEventResultsId,
      careerProgressionsId,
    });
    await this.repository.insert(newPlayer);
  }

  async getPlayerById(playerId: string) {
    return this.repository.findOne(playerId);
  }

  async getPlayerByIdOrThrow(id: string) {
    return this.repository.findOneOrFail(id);
  }

  async getPlayers() {
    return this.repository.find();
  }
}
