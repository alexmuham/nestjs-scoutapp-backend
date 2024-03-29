import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {UseGuards} from '@nestjs/common';
import AuthGuard from 'enhancers/guards/AuthGuard';
import CurrentSession from 'enhancers/decorators/CurrentSession';
import {Session} from 'entities';
import IReportsManager from 'managers/reports/IReportsManager';

@Resolver()
@UseGuards(AuthGuard)
export class ReportsResolver {
  constructor(private readonly reportsManager: IReportsManager) {}

  @Mutation(() => Boolean)
  async addGeneralReports(
    @CurrentSession() {userId}: Session,
    @Args({name: 'date', type: () => Date}) date: Date,
    @Args({name: 'notes', type: () => String}) notes: string,
    @Args({name: 'videosIds', type: () => [String], nullable: true}) videosIds: string[],
    @Args({name: 'playerId', type: () => String}) playerId: string,
  ) {
    await this.reportsManager.addGeneralReports(userId, date, notes, videosIds, playerId);
    return true;
  }

  @Mutation(() => Boolean)
  async addProReports(
    @CurrentSession() {userId}: Session,
    @Args({name: 'date', type: () => Date}) date: Date,
    @Args({name: 'matchDate', type: () => Date}) matchDate: Date,
    @Args({name: 'position', type: () => String}) position: string,
    @Args({name: 'round', type: () => String}) round: string,
    @Args({name: 'games', type: () => String}) games: string,
    @Args({name: 'innings', type: () => String}) innings: string,
    @Args({name: 'ABs', type: () => String}) ABs: string,
    @Args({name: 'raw', type: () => String}) raw: string,
    @Args({name: 'adj', type: () => String}) adj: string,
    @Args({name: 'current', type: () => String}) current: string,
    @Args({name: 'future', type: () => String}) future: string,
    @Args({name: 'physicalDest', type: () => String}) physicalDest: string,
    @Args({name: 'playerComp', type: () => String}) playerComp: string,
    @Args({name: 'hittingAbilityP', type: () => String}) hittingAbilityP: string,
    @Args({name: 'hittingAbilityF', type: () => String}) hittingAbilityF: string,
    @Args({name: 'hittingAbilityAdj', type: () => String}) hittingAbilityAdj: string,
    @Args({name: 'hitAppTypeP', type: () => String}) hitAppTypeP: string,
    @Args({name: 'hitAppTypeF', type: () => String}) hitAppTypeF: string,
    @Args({name: 'hitAppTypeAbj', type: () => String}) hitAppTypeAbj: string,
    @Args({name: 'powerFreqP', type: () => String}) powerFreqP: string,
    @Args({name: 'powerFreqF', type: () => String}) powerFreqF: string,
    @Args({name: 'powerFreqAbj', type: () => String}) powerFreqAbj: string,
    @Args({name: 'rawPwrP', type: () => String}) rawPwrP: string,
    @Args({name: 'rawPwrF', type: () => String}) rawPwrF: string,
    @Args({name: 'rawPwrAbj', type: () => String}) rawPwrAbj: string,
    @Args({name: 'runningAbilityP', type: () => String}) runningAbilityP: string,
    @Args({name: 'runningAbilityF', type: () => String}) runningAbilityF: string,
    @Args({name: 'runningAbilityAbj', type: () => String}) runningAbilityAbj: string,
    @Args({name: 'baseStealerP', type: () => String}) baseStealerP: string,
    @Args({name: 'baseStealerF', type: () => String}) baseStealerF: string,
    @Args({name: 'baseStealerAbj', type: () => String}) baseStealerAbj: string,
    @Args({name: 'armStrengthP', type: () => String}) armStrengthP: string,
    @Args({name: 'armStrengthF', type: () => String}) armStrengthF: string,
    @Args({name: 'armStrengthAbj', type: () => String}) armStrengthAbj: string,
    @Args({name: 'fieldingAbilityP', type: () => String}) fieldingAbilityP: string,
    @Args({name: 'fieldingAbilityF', type: () => String}) fieldingAbilityF: string,
    @Args({name: 'fieldingAbilityAbj', type: () => String}) fieldingAbilityAbj: string,
    @Args({name: 'handsP', type: () => String}) handsP: string,
    @Args({name: 'handsF', type: () => String}) handsF: string,
    @Args({name: 'handsAbj', type: () => String}) handsAbj: string,
    @Args({name: 'rangeP', type: () => String}) rangeP: string,
    @Args({name: 'rangeF', type: () => String}) rangeF: string,
    @Args({name: 'feetP', type: () => String}) feetP: string,
    @Args({name: 'rangeAbj', type: () => String}) rangeAbj: string,
    @Args({name: 'feetF', type: () => String}) feetF: string,
    @Args({name: 'feetAbj', type: () => String}) feetAbj: string,
    @Args({name: 'canHePlayP', type: () => String}) canHePlayP: string,
    @Args({name: 'canHePlayF', type: () => String}) canHePlayF: string,
    @Args({name: 'canHePlayAbj', type: () => String}) canHePlayAbj: string,
    @Args({name: 'aggressiveness', type: () => String}) aggressiveness: string,
    @Args({name: 'athleticism', type: () => String}) athleticism: string,
    @Args({name: 'bodyControl', type: () => String}) bodyControl: string,
    @Args({name: 'instincts', type: () => String}) instincts: string,
    @Args({name: 'competitiveness', type: () => String}) competitiveness: string,
    @Args({name: 'baseballIQ', type: () => String}) baseballIQ: string,
    @Args({name: 'handEyeControl', type: () => String}) handEyeControl: string,
    @Args({name: 'BP', type: () => String}) BP: string,
    @Args({name: 'infield', type: () => String}) infield: string,
    @Args({name: 'OFPOffense', type: () => String}) OFPOffense: string,
    @Args({name: 'OFPDefense', type: () => String}) OFPDefense: string,
    @Args({name: 'homeToFirst', type: () => String}) homeToFirst: string,
    @Args({name: 'sixtyYard', type: () => String}) sixtyYard: string,
    @Args({name: 'fortyYard', type: () => String}) fortyYard: string,
    @Args({name: 'posInOrder', type: () => String}) posInOrder: string,
    @Args({name: 'character', type: () => String}) character: string,
    @Args({name: 'entryLevel', type: () => String}) entryLevel: string,
    @Args({name: 'playerId', type: () => String}) playerId: string,
    @Args({name: 'ETA', type: () => String}) ETA: string,
    @Args({name: 'howWellKnown', type: () => String}) howWellKnown: string,
    @Args({name: 'howWellKnownComment', type: () => String}) howWellKnownComment: string,
    @Args({name: 'howWellSeen', type: () => String}) howWellSeen: string,
    @Args({name: 'howWellSeenComment', type: () => String}) howWellSeenComment: string,
    @Args({name: 'signAbility', type: () => String}) signAbility: string,
    @Args({name: 'signAbilityComment', type: () => String}) signAbilityComment: string,
  ) {
    await this.reportsManager.addProReports(
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
      userId,
      playerId,
    );
    return true;
  }
}
