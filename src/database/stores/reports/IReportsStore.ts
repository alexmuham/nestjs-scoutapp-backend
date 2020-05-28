import {File, GeneralReports, Reports} from 'database/entities';

export default abstract class IReportsStore {
  abstract createReports(): Promise<Reports>;

  abstract createGeneralReports(
    date: string,
    notes: string,
    videosIds: File[],
  ): Promise<GeneralReports>;

  abstract addGenReport(
    generalReports: GeneralReports[],
    reportId: string,
  ): Promise<void>;

  abstract getReportsById(reportId: string): Promise<Reports | undefined>;
}
