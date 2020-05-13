import CSVResponse from 'api/entities/CSVResponse';
import Player from 'entities/Player';

export default abstract class IPlayerManager {
  abstract uploadPlayersData(players: [CSVResponse]): Promise<void>;

  abstract getPlayerById(playerId: string): Promise<Player>;

  abstract getPlayers(): Promise<Player[]>;
}
