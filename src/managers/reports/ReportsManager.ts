import {Injectable} from '@nestjs/common';
import IUserStore from 'database/stores/user/IUserStore';
import IPlayerStore from 'database/stores/player/IPlayerStore';
import IReportsStore from 'database/stores/reports/IReportsStore';
import IFileStore from 'database/stores/file/IFileStore';
import IReportsManager from './IReportsManager';
import ScoutAppError from '../../ScoutAppError';

@Injectable()
export default class ReportsManager implements IReportsManager {
  constructor(
    private readonly playerStore: IPlayerStore,
    private readonly userStore: IUserStore,
    private readonly reportsStore: IReportsStore,
    private readonly fileStore: IFileStore,
  ) {}

  async addGeneralReports(
    userId: string,
    date: Date,
    notes: string,
    videosIds: string[],
    playerId: string,
  ) {
    const player = await this.playerStore.getPlayerById(playerId);
    const user = await this.userStore.getUserById(userId);
    if (!player) throw new ScoutAppError('');
    const report = await this.reportsStore.getReportsById(player.reportsId);
    if (!user) throw new ScoutAppError('');
    if (!report) throw new ScoutAppError('');
    const files = videosIds
      ? videosIds.map((id) => this.fileStore.getFileOrThrow({id}))
      : [];
    await Promise.all(files)
      .then(async (files) => {
        const generalReports = await this.reportsStore.createGeneralReports(
          date,
          notes,
          files,
        );
        const updateGenReports = report.generalReports ? report.generalReports : [];
        updateGenReports.push(generalReports);
        await this.reportsStore.addGenReport(updateGenReports, report.id);
        const updateUserGenReports = user.genReports ? user.genReports : [];
        updateUserGenReports.push(generalReports);
        await this.userStore.addGenReportToUser(updateUserGenReports, userId);
      })
      .catch((rej) => rej);
  }
}
