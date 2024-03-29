import {File, GeneralReports, Reports, ProReports} from 'database/entities';

export default abstract class IReportsStore {
  abstract createReports(): Promise<Reports>;

  abstract createGeneralReports(
    date: Date,
    notes: string,
    videosIds: File[],
  ): Promise<GeneralReports>;

  abstract addGenReport(
    generalReports: GeneralReports[],
    reportId: string,
  ): Promise<void>;

  abstract getReportsById(reportId: string): Promise<Reports | undefined>;

  abstract createProReports(
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
  ): Promise<ProReports>;

  abstract addProReport(proReport: ProReports[], reportId: string): Promise<void>;
}
