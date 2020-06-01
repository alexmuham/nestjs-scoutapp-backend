import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class ProReports {
  constructor(
    id: string,
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
    this.id = id;
    this.date = date;
    this.matchDate = matchDate;
    this.position = position;
    this.round = round;
    this.games = games;
    this.innings = innings;
    this.ABs = ABs;
    this.raw = raw;
    this.adj = adj;
    this.current = current;
    this.future = future;
    this.physicalDest = physicalDest;
    this.playerComp = playerComp;
    this.hittingAbilityP = hittingAbilityP;
    this.hittingAbilityF = hittingAbilityF;
    this.hittingAbilityAdj = hittingAbilityAdj;
    this.hitAppTypeP = hitAppTypeP;
    this.hitAppTypeF = hitAppTypeF;
    this.hitAppTypeAbj = hitAppTypeAbj;
    this.powerFreqP = powerFreqP;
    this.powerFreqF = powerFreqF;
    this.powerFreqAbj = powerFreqAbj;
    this.rawPwrP = rawPwrP;
    this.rawPwrF = rawPwrF;
    this.rawPwrAbj = rawPwrAbj;
    this.runningAbilityP = runningAbilityP;
    this.runningAbilityF = runningAbilityF;
    this.runningAbilityAbj = runningAbilityAbj;
    this.baseStealerP = baseStealerP;
    this.baseStealerF = baseStealerF;
    this.baseStealerAbj = baseStealerAbj;
    this.armStrengthP = armStrengthP;
    this.armStrengthF = armStrengthF;
    this.armStrengthAbj = armStrengthAbj;
    this.fieldingAbilityP = fieldingAbilityP;
    this.fieldingAbilityF = fieldingAbilityF;
    this.fieldingAbilityAbj = fieldingAbilityAbj;
    this.handsP = handsP;
    this.handsF = handsF;
    this.handsAbj = handsAbj;
    this.rangeP = rangeP;
    this.rangeF = rangeF;
    this.rangeAbj = rangeAbj;
    this.feetP = feetP;
    this.feetF = feetF;
    this.feetAbj = feetAbj;
    this.canHePlayP = canHePlayP;
    this.canHePlayF = canHePlayF;
    this.canHePlayAbj = canHePlayAbj;
    this.aggressiveness = aggressiveness;
    this.athleticism = athleticism;
    this.bodyControl = bodyControl;
    this.instincts = instincts;
    this.competitiveness = competitiveness;
    this.baseballIQ = baseballIQ;
    this.handEyeControl = handEyeControl;
    this.BP = BP;
    this.infield = infield;
    this.OFPOffense = OFPOffense;
    this.OFPDefense = OFPDefense;
    this.homeToFirst = homeToFirst;
    this.sixtyYard = sixtyYard;
    this.fortyYard = fortyYard;
    this.posInOrder = posInOrder;
    this.character = character;
    this.entryLevel = entryLevel;
    this.ETA = ETA;
    this.howWellKnown = howWellKnown;
    this.howWellKnownComment = howWellKnownComment;
    this.howWellSeen = howWellSeen;
    this.howWellSeenComment = howWellSeenComment;
    this.signAbility = signAbility;
    this.signAbilityComment = signAbilityComment;
    this.OFPP = OFPP;
    this.OFPF = OFPF;
    this.OFPAdj = OFPAdj;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  date: Date;

  @Column('text')
  matchDate: Date;

  @Column('text')
  position: string;

  @Column('text')
  round: string;

  @Column('text')
  games: string;

  @Column('text')
  innings: string;

  @Column('text')
  ABs: string;

  @Column('text')
  raw: string;

  @Column('text')
  adj: string;

  @Column('text')
  current: string;

  @Column('text')
  future: string;

  @Column('text')
  physicalDest: string;

  @Column('text')
  playerComp: string;

  @Column('text')
  hittingAbilityP: string;

  @Column('text')
  hittingAbilityF: string;

  @Column('text')
  hittingAbilityAdj: string;

  @Column('text')
  hitAppTypeP: string;

  @Column('text')
  hitAppTypeF: string;

  @Column('text')
  hitAppTypeAbj: string;

  @Column('text')
  powerFreqP: string;

  @Column('text')
  powerFreqF: string;

  @Column('text')
  powerFreqAbj: string;

  @Column('text')
  rawPwrP: string;

  @Column('text')
  rawPwrF: string;

  @Column('text')
  rawPwrAbj: string;

  @Column('text')
  runningAbilityP: string;

  @Column('text')
  runningAbilityF: string;

  @Column('text')
  runningAbilityAbj: string;

  @Column('text')
  baseStealerP: string;

  @Column('text')
  baseStealerF: string;

  @Column('text')
  baseStealerAbj: string;

  @Column('text')
  armStrengthP: string;

  @Column('text')
  armStrengthF: string;

  @Column('text')
  armStrengthAbj: string;

  @Column('text')
  fieldingAbilityP: string;

  @Column('text')
  fieldingAbilityF: string;

  @Column('text')
  fieldingAbilityAbj: string;

  @Column('text')
  handsP: string;

  @Column('text')
  handsF: string;

  @Column('text')
  handsAbj: string;

  @Column('text')
  rangeP: string;

  @Column('text')
  rangeF: string;

  @Column('text')
  rangeAbj: string;

  @Column('text')
  feetP: string;

  @Column('text')
  feetF: string;

  @Column('text')
  feetAbj: string;

  @Column('text')
  canHePlayP: string;

  @Column('text')
  canHePlayF: string;

  @Column('text')
  canHePlayAbj: string;

  @Column('text')
  aggressiveness: string;

  @Column('text')
  athleticism: string;

  @Column('text')
  bodyControl: string;

  @Column('text')
  instincts: string;

  @Column('text')
  competitiveness: string;

  @Column('text')
  baseballIQ: string;

  @Column('text')
  handEyeControl: string;

  @Column('text')
  BP: string;

  @Column('text')
  infield: string;

  @Column('text')
  OFPOffense: string;

  @Column('text')
  OFPDefense: string;

  @Column('text')
  homeToFirst: string;

  @Column('text')
  sixtyYard: string;

  @Column('text')
  fortyYard: string;

  @Column('text')
  posInOrder: string;

  @Column('text')
  character: string;

  @Column('text')
  entryLevel: string;

  @Column('text')
  ETA: string;

  @Column('text')
  howWellSeen: string;

  @Column('text')
  howWellKnown: string;

  @Column('text')
  howWellKnownComment: string;

  @Column('text')
  howWellSeenComment: string;

  @Column('text')
  signAbility: string;

  @Column('text')
  signAbilityComment: string;

  @Column('text')
  OFPP: string;

  @Column('text')
  OFPF: string;

  @Column('text')
  OFPAdj: string;
}
