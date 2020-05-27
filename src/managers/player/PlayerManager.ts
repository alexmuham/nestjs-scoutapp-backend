import {Injectable} from '@nestjs/common';
import IPlayerManager from './IPlayerManager';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import CSVResponse, {Statistic} from 'api/entities/CSVResponse';
import ScoutAppError from '../../ScoutAppError';
import {mapPlayerFormDb, mapPlayersFormDb} from 'database/entities/Mappers';
import IUserStore from 'database/stores/user/IUserStore';
import {ID} from 'entities/Common';
import IFileStore from 'database/stores/file/IFileStore';

@Injectable()
export default class PlayerManager implements IPlayerManager {
  constructor(
    private playerStore: IPlayerStore,
    private userStore: IUserStore,
    private fileStore: IFileStore,
  ) {}

  async uploadPlayersData(players: [CSVResponse]) {
    const firstHundredPlayers = players.slice(0, 100);
    firstHundredPlayers.map(async (player) => {
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

      const progress = JSON.stringify(statistics.Career_progressions).toString();

      const careerProgressionsValue = await this.playerStore.addCareerProgressions(
        progress,
      );

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
    const percentileRankings = await this.playerStore.getPercentileRankingsById(
      player.percentileRankingsId,
    );
    return mapPlayerFormDb(player, percentileRankings);
  }

  async getPlayers() {
    const players = await this.playerStore.getPlayers();
    if (!players || players.length < 1) throw new ScoutAppError('');
    return mapPlayersFormDb(players);
  }

  async addPlayerToUser(playerId: string, userId: string) {
    const user = await this.userStore.getUserById(userId);
    if (!user) throw new ScoutAppError('This user does not exist.');
    const player = await this.playerStore.getPlayerById(playerId);
    if (!player) throw new ScoutAppError('This player does not exist.');
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
    if (!user) throw new ScoutAppError('This user does not exist.');
    return mapPlayersFormDb(user.players);
  }

  async addPlayerImage(imageId: string, playerId: string) {
    const file = await this.fileStore.getFile({id: imageId});
    if (!file) throw new ScoutAppError('This file does not exist.');
    const player = await this.playerStore.getPlayerById(playerId);
    if (!player) throw new ScoutAppError('This player does not exist.');
    const playerImages = player.images;
    playerImages.push(file);
    await this.playerStore.addPlayerImage(playerImages, playerId);
    if (playerImages.length > 5) {
      const sortImagesByDate = player.images.sort((firstFile, secondFile) => {
        const firstDate = new Date(firstFile.date);
        const secondDate = new Date(secondFile.date);
        return +secondDate - +firstDate;
      });
      await this.playerStore.addPlayerImage(sortImagesByDate.slice(0, 5), playerId);
    } else {
      await this.playerStore.addPlayerImage(playerImages, playerId);
    }
  }

  async getPlayersBySearchParameters(
    name: string | undefined,
    height: number[],
    weight: number[],
    position: string[] | undefined,
    graduatingClass: number[],
    commitment: string | undefined,
    bat: string | undefined,
    playerThrows: string | undefined,
    sixtyTime: number[],
    positionVelocity: string | undefined,
    tenYard: number[],
    exitVelocity: number[],
  ) {
    const players = await this.playerStore.getPlayers();
    if (!players || players.length < 1) throw new ScoutAppError('');
    const playersByName = !name
      ? players
      : players.filter((player) => player.name.slice(0, name.length) === name);

    const playersByHeight = playersByName.filter((player) => {
      const foot = +player.height.slice(0, 1) * 30.48;
      const inch = +player.height.slice(3, player.height.length) * 2.54;
      const playerHeight = +(foot + inch).toFixed(2);
      return playerHeight >= height[0] * 30.48 && playerHeight <= height[1] * 30.48;
    });

    const playerByWeight = playersByHeight.filter(
      (player) => +player.weight >= weight[0] && +player.weight <= weight[1],
    );

    const playerByPosition = playerByWeight;
    //   !position
    // ? playerByWeight
    // : playerByWeight.filter((player) => {
    //     let data;
    //     for (let i = 0; i < position.length; i += 1) {
    //       data = player.primaryPosition === position[i];
    //     }
    //     return data;
    //   });

    const playerByGraduatingClass = playerByPosition.filter(
      (player) =>
        +player.graduatingClass >= graduatingClass[0] &&
        +player.graduatingClass <= graduatingClass[1],
    );

    const playerByCommitment = !commitment
      ? playerByGraduatingClass
      : playerByGraduatingClass.filter(
          (player) => player.collegeCommitment === commitment,
        );

    const playerByBat = !bat
      ? playerByCommitment
      : playerByCommitment.filter((player) => player.bats === bat);

    const playerByThrow = !playerThrows
      ? playerByBat
      : playerByBat.filter((player) => player.throws === playerThrows);

    const playerBySixtyTime = playerByThrow.filter((player) => {
      return (
        player.pGEventResults &&
        +player.pGEventResults.sixtyYdDash >= sixtyTime[0] &&
        +player.pGEventResults.sixtyYdDash <= sixtyTime[1]
      );
    });

    const playerByPositionVelocity = !positionVelocity // TODO ADD POSITION VELOCITY
      ? playerBySixtyTime
      : playerBySixtyTime;

    const playerByTenYard = playerByPositionVelocity.filter(
      (player) =>
        player.pGEventResults &&
        +player.pGEventResults.tenYdSplit >= tenYard[0] &&
        +player.pGEventResults.tenYdSplit <= tenYard[1],
    );

    const playerByExitVelocity = playerByTenYard.filter(
      (player) =>
        player.pGEventResults &&
        +player.pGEventResults.exitVelocity >= exitVelocity[0] &&
        +player.pGEventResults.exitVelocity <= exitVelocity[1],
    );

    return mapPlayersFormDb(playerByExitVelocity);
  }
}
