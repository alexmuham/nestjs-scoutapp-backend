import {Injectable} from '@nestjs/common';
import IPlayerManager from './IPlayerManager';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import CSVResponse, {Statistic} from 'api/entities/CSVResponse';
import ScoutAppError from '../../ScoutAppError';
import {mapPlayerFormDb, mapPlayersFormDb} from '../../database/entities/Mappers';
import IUserStore from 'database/stores/user/IUserStore';
import {ID} from 'entities/Common';

@Injectable()
export default class PlayerManager implements IPlayerManager {
  constructor(private playerStore: IPlayerStore, private userStore: IUserStore) {}

  async uploadPlayersData(players: [CSVResponse]) {
    players.map(async (player) => {
      const json = player.statistics;

      const statistics: Statistic = JSON.parse(json);

      const {
        Percentile_rankings: PercentileRankings,
        PG_event_results: PGEventResults,
      } = statistics;

      const {
        C,
        '1B': oneB,
        '10 SPL': tenSPL,
        FB,
        IF,
        '60': sixty,
        Pop,
      } = PercentileRankings;

      const {
        '10_yd_split': tenYdSplit,
        exit_velocity: exitVelocity,
        '60_yd_dash': sixtyYdDash,
        fastball_velocity: fastballVelocity,
        infield_velocity: infieldVelocity,
      } = PGEventResults;

      const cValue = C
        ? await this.playerStore.createRanking(C.top, C.percentile, C.average)
        : undefined;
      const oneBValue = oneB
        ? await this.playerStore.createRanking(oneB.top, oneB.percentile, oneB.average)
        : undefined;
      const tenSPLValue = tenSPL
        ? await this.playerStore.createRanking(
            tenSPL.top,
            tenSPL.percentile,
            tenSPL.average,
          )
        : undefined;
      const FBValue = FB
        ? await this.playerStore.createRanking(FB.top, FB.percentile, FB.average)
        : undefined;
      const IFValue = IF
        ? await this.playerStore.createRanking(IF.top, IF.percentile, IF.average)
        : undefined;
      const sixtyValue = sixty
        ? await this.playerStore.createRanking(sixty.top, sixty.percentile, sixty.average)
        : undefined;
      const PopValue = Pop
        ? await this.playerStore.createRanking(Pop.top, Pop.percentile, Pop.average)
        : undefined;

      const PercentileRankingsValue = await this.playerStore.addPercentileRankings(
        FBValue ? FBValue.id : undefined,
        cValue ? cValue.id : undefined,
        oneBValue ? oneBValue.id : undefined,
        tenSPLValue ? tenSPLValue.id : undefined,
        sixtyValue ? sixtyValue.id : undefined,
        IFValue ? IFValue.id : undefined,
        PopValue ? PopValue.id : undefined,
      );

      const PGEventResultsValue = await this.playerStore.addPGEventResults(
        tenYdSplit,
        exitVelocity,
        sixtyYdDash,
        fastballVelocity,
        infieldVelocity,
      );

      const careerProgressionsValue = await this.playerStore.addCareerProgressions();

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
        PercentileRankingsValue.id,
        PGEventResultsValue.id,
        careerProgressionsValue.id,
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

  async deletePlayerToUser(playerId: string, userId: ID) {
    await this.userStore.deletePlayerToUser(playerId, userId);
  }

  async getPlayersFromUser(userId: string) {
    const user = await this.userStore.getUserById(userId);
    if (!user?.players) throw new ScoutAppError('');
    return mapPlayersFormDb(user.players);
  }
}
