export default abstract class IReportsManager {
  abstract addGeneralReports(
    userId: string,
    date: string,
    notes: string,
    videosIds: string[],
    playerId: string,
  ): Promise<void>;
}
