import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UseGuards} from '@nestjs/common';
import AuthGuard from 'enhancers/guards/AuthGuard';
import {mapPlayersToGQL, mapPlayerToGQL} from '../entities/Mappers';
import IPlayerManager from 'managers/player/IPlayerManager';
import {Player} from 'graphql/entities';
import CurrentSession from 'enhancers/decorators/CurrentSession';
import Session from 'entities/Session';

@Resolver()
@UseGuards(AuthGuard)
export class PlayerResolver {
  constructor(private readonly playerManager: IPlayerManager) {}

  @Query(() => Player)
  async playerById(@Args({name: 'playerId', type: () => String}) playerId: string) {
    return mapPlayerToGQL(await this.playerManager.getPlayerById(playerId));
  }

  @Query(() => [Player])
  async getPlayers() {
    return mapPlayersToGQL(await this.playerManager.getPlayers());
  }

  @Mutation(() => Boolean)
  async addPlayerToUser(
    @Args({name: 'playerId', type: () => String}) playerId: string,
    @CurrentSession() {userId}: Session,
  ) {
    await this.playerManager.addPlayerToUser(playerId, userId);
    return true;
  }

  @Mutation(() => Boolean)
  async deletePlayersToUser(
    @Args({name: 'playersIds', type: () => [String]}) playersIds: string[],
    @CurrentSession() {userId}: Session,
  ) {
    await this.playerManager.deletePlayersToUser(playersIds, userId);
    return true;
  }

  @Mutation(() => Boolean)
  async deletePlayerToUser(
    @Args({name: 'playerId', type: () => String}) playerId: string,
    @CurrentSession() {userId}: Session,
  ) {
    await this.playerManager.deletePlayerToUser(playerId, userId);
    return true;
  }

  @Query(() => [Player])
  async playersFromUser(@CurrentSession() {userId}: Session) {
    return mapPlayersToGQL(await this.playerManager.getPlayersFromUser(userId));
  }

  @Mutation(() => Boolean)
  async addPlayerImage(
    @Args({name: 'imageId', type: () => String}) imageId: string,
    @Args({name: 'playerId', type: () => String}) playerId: string,
  ) {
    await this.playerManager.addPlayerImage(imageId, playerId);
    return true;
  }

  @Query(() => [Player])
  async playersBySearchParameters(
    @Args({name: 'name', type: () => String, nullable: true}) name: string,
    @Args({name: 'height', type: () => [Number]}) height: number[],
    @Args({name: 'weight', type: () => [Number]}) weight: number[],
    @Args({name: 'position', type: () => [String], nullable: true}) position: string[],
    @Args({name: 'graduatingClass', type: () => [Number]}) graduatingClass: number[],
    @Args({name: 'commitment', type: () => String, nullable: true}) commitment: string,
    @Args({name: 'bat', type: () => String, nullable: true}) bat: string,
    @Args({name: 'playerThrows', type: () => String, nullable: true})
    playerThrows: string,
    @Args({name: 'sixtyTime', type: () => [Number]}) sixtyTime: number[],
    @Args({name: 'positionVelocity', type: () => String, nullable: true})
    positionVelocity: string,
    @Args({name: 'tenYard', type: () => [Number]}) tenYard: number[],
    @Args({name: 'exitVelocity', type: () => [Number]}) exitVelocity: number[],
  ) {
    return mapPlayersToGQL(
      await this.playerManager.getPlayersBySearchParameters(
        name,
        height,
        weight,
        position,
        graduatingClass,
        commitment,
        bat,
        playerThrows,
        sixtyTime,
        positionVelocity,
        tenYard,
        exitVelocity,
      ),
    );
  }
}
