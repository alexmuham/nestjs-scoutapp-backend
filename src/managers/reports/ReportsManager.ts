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

  async addProReports(
    date: Date,
    matchDate: Date,
    position: string,
    round: string,
    games: string,
    innings: string,
    ABs: string,
    raw: string,
    adj: string,
    current: string,
    future: string,
    physicalDest: string,
    playerComp: string,
    hittingAbilityP: string,
    hittingAbilityF: string,
    hittingAbilityAdj: string,
    hitAppTypeP: string,
    hitAppTypeF: string,
    hitAppTypeAbj: string,
    powerFreqP: string,
    powerFreqF: string,
    powerFreqAbj: string,
    rawPwrP: string,
    rawPwrF: string,
    rawPwrAbj: string,
    runningAbilityP: string,
    runningAbilityF: string,
    runningAbilityAbj: string,
    baseStealerP: string,
    baseStealerF: string,
    baseStealerAbj: string,
    armStrengthP: string,
    armStrengthF: string,
    armStrengthAbj: string,
    fieldingAbilityP: string,
    fieldingAbilityF: string,
    fieldingAbilityAbj: string,
    handsP: string,
    handsF: string,
    handsAbj: string,
    rangeP: string,
    rangeF: string,
    rangeAbj: string,
    feetP: string,
    feetF: string,
    feetAbj: string,
    canHePlayP: string,
    canHePlayF: string,
    canHePlayAbj: string,
    aggressiveness: string,
    athleticism: string,
    bodyControl: string,
    instincts: string,
    competitiveness: string,
    baseballIQ: string,
    handEyeControl: string,
    BP: string,
    infield: string,
    OFPOffense: string,
    OFPDefense: string,
    homeToFirst: string,
    sixtyYard: string,
    fortyYard: string,
    posInOrder: string,
    character: string,
    entryLevel: string,
    ETA: string,
    howWellKnown: string,
    howWellKnownComment: string,
    howWellSeen: string,
    howWellSeenComment: string,
    signAbility: string,
    signAbilityComment: string,
    userId: string,
    playerId: string,
  ) {
    const player = await this.playerStore.getPlayerById(playerId);
    const user = await this.userStore.getUserById(userId);
    if (!player) throw new ScoutAppError('');
    const report = await this.reportsStore.getReportsById(player.reportsId);
    if (!user) throw new ScoutAppError('');
    if (!report) throw new ScoutAppError('');
    const OFPP =
      hittingAbilityP +
      hitAppTypeP +
      powerFreqP +
      rawPwrP +
      runningAbilityP +
      baseStealerP +
      armStrengthP +
      fieldingAbilityP +
      handsP +
      rangeP +
      feetP +
      canHePlayP;
    const OFPF =
      hittingAbilityF +
      hitAppTypeF +
      powerFreqF +
      rawPwrF +
      runningAbilityF +
      baseStealerF +
      armStrengthF +
      fieldingAbilityF +
      handsF +
      rangeF +
      feetF +
      canHePlayF;
    const OFPAdj =
      hittingAbilityAdj +
      hitAppTypeAbj +
      powerFreqAbj +
      rawPwrAbj +
      runningAbilityAbj +
      baseStealerAbj +
      armStrengthAbj +
      fieldingAbilityAbj +
      handsAbj +
      rangeAbj +
      feetAbj +
      canHePlayAbj;
    const proReport = await this.reportsStore.createProReports(
      date,
      matchDate,
      position,
      round,
      games,
      innings,
      ABs,
      raw,
      adj,
      current,
      future,
      physicalDest,
      playerComp,
      hittingAbilityP,
      hittingAbilityF,
      hittingAbilityAdj,
      hitAppTypeP,
      hitAppTypeF,
      hitAppTypeAbj,
      powerFreqP,
      powerFreqF,
      powerFreqAbj,
      rawPwrP,
      rawPwrF,
      rawPwrAbj,
      runningAbilityP,
      runningAbilityF,
      runningAbilityAbj,
      baseStealerP,
      baseStealerF,
      baseStealerAbj,
      armStrengthP,
      armStrengthF,
      armStrengthAbj,
      fieldingAbilityP,
      fieldingAbilityF,
      fieldingAbilityAbj,
      handsP,
      handsF,
      handsAbj,
      rangeP,
      rangeF,
      rangeAbj,
      feetP,
      feetF,
      feetAbj,
      canHePlayP,
      canHePlayF,
      canHePlayAbj,
      aggressiveness,
      athleticism,
      bodyControl,
      instincts,
      competitiveness,
      baseballIQ,
      handEyeControl,
      BP,
      infield,
      OFPOffense,
      OFPDefense,
      homeToFirst,
      sixtyYard,
      fortyYard,
      posInOrder,
      character,
      entryLevel,
      ETA,
      howWellKnown,
      howWellKnownComment,
      howWellSeen,
      howWellSeenComment,
      signAbility,
      signAbilityComment,
      OFPP,
      OFPF,
      OFPAdj,
    );
    const updateProReport = report.proReports ? report.proReports : [];
    updateProReport.push(proReport);
    await this.reportsStore.addProReport(updateProReport, report.id);
    const updateUserProReports = user.proReports ? user.proReports : [];
    updateUserProReports.push(proReport);
    await this.userStore.addProReportToUser(updateUserProReports, userId);
  }
}
