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
}
