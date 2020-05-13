import {Injectable} from '@nestjs/common';
import IPlayerManager from './IPlayerManager';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import CSVResponse from 'api/entities/CSVResponse';
import ScoutAppError from '../../ScoutAppError';
import {mapPlayerFormDB, mapPlayersFormDB} from '../../database/entities/Mappers';

@Injectable()
export default class PlayerManager implements IPlayerManager {
  constructor(private playerStore: IPlayerStore) {}

  async uploadPlayersData(players: [CSVResponse]) {
    await players.map((player) => {
      return this.playerStore.uploadPlayersData(
        player.name,
        player.external_id,
        player.height,
        player.weight,
        player.bats,
        player.throws,
        player.graduating_class,
        player.primary_position,
        player.high_school,
        player.contact_phone,
        player.high_school_contact_phone,
        player.state_position_ranking,
        player.state_overall_ranking,
        player.national_position_ranking,
        player.national_overall_ranking,
        player.college_commitment,
        // player.statistics,
      );
    });
  }

  async getPlayerById(playerId: string) {
    const player = await this.playerStore.getPlayerById(playerId);
    if (!player) throw new ScoutAppError('');
    return mapPlayerFormDB(player);
  }

  async getPlayers() {
    const players = await this.playerStore.getPlayers();
    if (!players || players.length < 1) throw new ScoutAppError('');
    return mapPlayersFormDB(players);
  }
}
