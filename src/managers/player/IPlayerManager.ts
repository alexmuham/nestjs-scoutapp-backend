import CSVResponse from 'api/entities/CSVResponse';
import Player from 'entities/Player';
import {ID} from 'entities/Common';

export default abstract class IPlayerManager {
  abstract uploadPlayersData(players: [CSVResponse]): Promise<void>;

  abstract getPlayerById(playerId: ID): Promise<Player>;

  abstract getPlayers(): Promise<Player[]>;

  abstract addPlayerToUser(playerId: ID, userId: ID): Promise<void>;

  abstract deletePlayersToUser(playersIds: string[], userId: ID): Promise<void>;

  abstract deletePlayerToUser(playerId: string, userId: ID): Promise<void>;

  abstract getPlayersFromUser(userId: ID): Promise<Player[]>;

  abstract addPlayerImage(imageId: string, playerId: string): Promise<void>;

  abstract getPlayersBySearchParameters(
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
  ): Promise<Player[]>;
}
