import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import IAccountManager from '../../managers/account/IAccountManager';
import {UseGuards} from '@nestjs/common';
import AuthGuard from 'enhancers/guards/AuthGuard';
import CurrentSession from 'enhancers/decorators/CurrentSession';
import {Session} from 'entities';
import {Account, User} from '../entities';
import {mapAccountToGQL, mapUsersToGQL, mapUserToGQL} from '../entities/Mappers';

@Resolver()
@UseGuards(AuthGuard)
export class AccountResolver {
  constructor(private readonly accountManager: IAccountManager) {}

  @Query(() => Account)
  async account(@CurrentSession() {userId}: Session) {
    return mapAccountToGQL(await this.accountManager.getAccount(userId));
  }

  @Query(() => [User])
  async friends(@CurrentSession() {userId}: Session) {
    return mapUsersToGQL(await this.accountManager.getFriends(userId));
  }

  @Query(() => User)
  async friendById(
    @CurrentSession() {userId}: Session,
    @Args({name: 'friendId', type: () => String}) friendId: string,
  ) {
    return mapUserToGQL(await this.accountManager.getFriendById(userId, friendId));
  }

  @Mutation(() => Boolean)
  async addFriend(
    @CurrentSession() {userId}: Session,
    @Args({name: 'friendId', type: () => String}) friendId: string,
  ) {
    await this.accountManager.addFriend(userId, friendId);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteFriend(
    @CurrentSession() {userId}: Session,
    @Args({name: 'friendId', type: () => String}) friendId: string,
  ) {
    await this.accountManager.deleteFriend(userId, friendId);
    return true;
  }
}
