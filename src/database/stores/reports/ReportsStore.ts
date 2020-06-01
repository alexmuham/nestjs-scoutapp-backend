import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User, Reports, GeneralReports, Player, File, ProReports} from 'database/entities';
import IReportsStore from './IReportsStore';

export default class ReportsStore extends IReportsStore {
  constructor(
    @InjectRepository(Reports)
    private readonly repository: Repository<Reports>,
    @InjectRepository(GeneralReports)
    private readonly generalRepository: Repository<GeneralReports>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(ProReports)
    private readonly proReportsRepository: Repository<ProReports>,
  ) {
    super();
  }

  async createReports() {
    const newReports = await this.repository.create();
    await this.repository.insert(newReports);
    return newReports;
  }

  async createGeneralReports(date: Date, notes: string, videosIds: File[]) {
    const newGenReports = await this.generalRepository.create({
      date,
      notes,
      videos: videosIds,
    });
    await this.generalRepository.insert(newGenReports);
    return newGenReports;
  }

  async addGenReport(generalReports: GeneralReports[], reportId: string) {
    await this.repository.save({id: reportId, generalReports});
  }

  async getReportsById(reportId: string) {
    return this.repository.findOne(reportId, {relations: ['generalReports']});
  }

  async createProReports(
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
    OFPP: string,
    OFPF: string,
    OFPAdj: string,
  ) {
    const newProReport = await this.proReportsRepository.create({
      ABs,
      adj,
      aggressiveness,
      armStrengthAbj,
      armStrengthF,
      armStrengthP,
      athleticism,
      baseballIQ,
      baseStealerAbj,
      baseStealerF,
      baseStealerP,
      bodyControl,
      BP,
      canHePlayAbj,
      canHePlayF,
      canHePlayP,
      competitiveness,
      current,
      date,
      entryLevel,
      ETA,
      feetAbj,
      feetF,
      feetP,
      character,
      fieldingAbilityAbj,
      fieldingAbilityF,
      fieldingAbilityP,
      fortyYard,
      future,
      games,
      handEyeControl,
      handsAbj,
      handsF,
      handsP,
      hitAppTypeAbj,
      hitAppTypeF,
      hitAppTypeP,
      hittingAbilityAdj,
      hittingAbilityF,
      hittingAbilityP,
      homeToFirst,
      howWellKnown,
      howWellKnownComment,
      howWellSeen,
      howWellSeenComment,
      infield,
      innings,
      instincts,
      matchDate,
      sixtyYard,
      signAbilityComment,
      OFPDefense,
      OFPOffense,
      physicalDest,
      playerComp,
      posInOrder,
      position,
      powerFreqAbj,
      powerFreqF,
      powerFreqP,
      rangeAbj,
      rangeF,
      rangeP,
      raw,
      rawPwrAbj,
      rawPwrF,
      rawPwrP,
      round,
      runningAbilityAbj,
      runningAbilityF,
      runningAbilityP,
      signAbility,
      OFPAdj,
      OFPP,
      OFPF,
    });
    await this.proReportsRepository.insert(newProReport);
    return newProReport;
  }

  async addProReport(proReport: ProReports[], reportId: string) {
    await this.repository.save({id: reportId, proReport});
  }
}
