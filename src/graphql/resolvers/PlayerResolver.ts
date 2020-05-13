import {Args, Query, Resolver} from '@nestjs/graphql';
import {UseGuards} from '@nestjs/common';
import AuthGuard from '../../enhancers/guards/AuthGuard';
import {mapPlayersToGQL, mapPlayerToGQL} from '../entities/Mappers';
import IPlayerManager from 'managers/player/IPlayerManager';
import Player from 'graphql/entities/player/Player';

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
}
