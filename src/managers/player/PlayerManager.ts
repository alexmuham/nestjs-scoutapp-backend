import {Injectable} from '@nestjs/common';
import IPlayerManager from './IPlayerManager';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import CSVResponse from 'api/entities/CSVResponse';

@Injectable()
export default class PlayerManager implements IPlayerManager {
  constructor(private playerStore: IPlayerStore) {}

  // eslint-disable-next-line class-methods-use-this
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
}
