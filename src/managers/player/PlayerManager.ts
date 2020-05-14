import {Injectable} from '@nestjs/common';
import IPlayerManager from './IPlayerManager';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import CSVResponse from 'api/entities/CSVResponse';
import ScoutAppError from '../../ScoutAppError';
import {mapPlayerFormDb, mapPlayersFormDb} from '../../database/entities/Mappers';
import {mapPlayerFormDB, mapPlayersFormDB} from 'database/entities/Mappers';
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

  async deletePlayerToUser(playersIds: string[], userId: ID) {
    // const user = await this.userStore.getUserById(userId);
    // if (!user?.players) throw new ScoutAppError('');
    // const players = user.players.reduce((acc, player) => {
    //   const array = [];
    //   for (let i = 0; i < playersIds.length; i += 1) {
    //     if (player.id === playersIds[i]) {
    //       array.push(player);
    //     }
    //   }
    //   const asd = [];
    //   asd.push(player);
    //   // @ts-ignore
    //   acc.push(R.difference(asd, array));
    //   return acc;
    // }, []);
    // // @ts-ignore
    // const playersToUpdate = players[0].filter((item: Player) => item.name.length > 1);
    await this.userStore.deletePlayerToUser(
      [
        {
          id: '2a5eedf9-3bad-4ca2-ac8b-6c1ae4b3d9ab',
          name: 'Jonathon Sylvester',
          externalId: '372819',
          height: '8-May',
          weight: '195',
          bats: 'R',
          throws: 'R',
          graduatingClass: '2017',
          primaryPosition: 'OF',
          highSchool: 'A & M Cons',
          contactPhone: '',
          highSchoolContactPhone: '',
          statePositionRanking: '51',
          stateOverallRanking: '298',
          nationalPositionRanking: '573',
          nationalOverallRanking: '',
          collegeCommitment: 'East Texas Baptist University',
        },
      ],
      userId,
    );
  }

  async getPlayersFromUser(userId: string) {
    const user = await this.userStore.getUserById(userId);
    if (!user?.players) throw new ScoutAppError('');
    return mapPlayersFormDB(user.players);
  }
}
