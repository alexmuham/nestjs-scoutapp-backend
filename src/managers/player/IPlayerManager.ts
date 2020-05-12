import CSVResponse from 'api/entities/CSVResponse';

export default abstract class IPlayerManager {
  abstract uploadPlayersData(players: [CSVResponse]): Promise<void>;
}
