import {Injectable} from '@nestjs/common';
import IPlayerManager from './IPlayerManager';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import CSVResponse from 'api/entities/CSVResponse';
import ScoutAppError from '../../ScoutAppError';
import {mapPlayerFormDb, mapPlayersFormDb} from '../../database/entities/Mappers';
import IUserStore from 'database/stores/user/IUserStore';
import {ID} from 'entities/Common';

@Injectable()
export default class PlayerManager implements IPlayerManager {
  constructor(private playerStore: IPlayerStore, private userStore: IUserStore) {}

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
      );
    });
  }

  async getPlayerById(playerId: string) {
    const player = await this.playerStore.getPlayerById(playerId);
    if (!player) throw new ScoutAppError('');
    return mapPlayerFormDb(player);
  }

  async getPlayers() {
    const players = await this.playerStore.getPlayers();
    if (!players || players.length < 1) throw new ScoutAppError('');
    return mapPlayersFormDb(players);
  }

  async addPlayerToUser(playerId: string, userId: string) {
    const user = await this.userStore.getUserById(userId);
    if (!user?.players) throw new ScoutAppError('');
    const player = await this.playerStore.getPlayerById(playerId);
    if (!player) throw new ScoutAppError('');
    const {players} = user;
    await players.push(player);
    await this.userStore.addPlayerToUser(players, userId);
  }

  async deletePlayersToUser(playersIds: string[], userId: ID) {
    await playersIds.forEach((playerId) =>
      this.userStore.deletePlayerToUser(playerId, userId),
    );
  }

  async getPlayersFromUser(userId: string) {
    const user = await this.userStore.getUserById(userId);
    if (!user?.players) throw new ScoutAppError('');
    return mapPlayersFormDb(user.players);
  }
}
