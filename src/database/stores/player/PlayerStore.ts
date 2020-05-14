import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import IPlayerStore from './IPlayerStore';
import Player from 'database/entities/Player';
import {Injectable} from '@nestjs/common';

@Injectable()
export default class PlayerStore implements IPlayerStore {
  constructor(
    @InjectRepository(Player)
    private readonly repository: Repository<Player>,
  ) {}

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
    // statistics: object,
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
      // statistics,
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
