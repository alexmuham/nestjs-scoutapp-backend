export default abstract class IReportsManager {
  abstract addGeneralReports(
    userId: string,
    date: Date,
    notes: string,
    videosIds: string[] | undefined,
    playerId: string,
  ): Promise<void>;
}
