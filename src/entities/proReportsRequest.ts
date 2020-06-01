export interface ReportDate {
  position: string;
  dateValue: Date;
  round: string;
  games: string;
  innings: string;
  ABs: string;
  raw: string;
  adj: string;
  current: string;
  future: string;
  physicalDest: string;
  playerComp: string;
  matchDate: Date;
}

export interface Parameter {
  hitAppType: string;
  hittingAbility: string;
  powerFreq: string;
  rawPwr: string;
  runningAbility: string;
  baseStealer: string;
  armStrength: string;
  fieldingAbility: string;
  hands: string;
  canHePlay: string;
  range: string;
  feet: string;
}

export default interface ProReportsRequest {
  reportDate: ReportDate;
  parameterP: Parameter;
  parameterF: Parameter;
  parameterAdj: Parameter;
  aggressiveness: string;
  athleticism: string;
  bodyControl: string;
  instincts: string;
  competitiveness: string;
  baseballIQ: string;
  handEyeControl: string;
  BP: string;
  infield: string;
  OFPOffense: string;
  OFPDefense: string;
  homeToFirst: string;
  sixtyYard: string;
  fortyYard: string;
  posInOrder: string;
  character: string;
  entryLevel: string;
  ETA: string;
  howWellKnown: string;
  howWellKnownComment: string;
  howWellSeen: string;
  howWellSeenComment: string;
  signAbility: string;
  signAbilityComment: string;
  playerId: string;
}
