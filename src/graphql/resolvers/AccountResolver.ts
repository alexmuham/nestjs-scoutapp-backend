import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import IAccountManager from '../../managers/account/IAccountManager';
import Account from '../entities/account/Account';
import {UseGuards, ValidationPipe} from '@nestjs/common';
import AuthGuard from '../../enhancers/guards/AuthGuard';
import CurrentSession from '../../enhancers/decorators/CurrentSession';
import Session from '../../entities/Session';
import UserUpdateRequest from '../entities/user/UserUpdateRequest';
import {mapAccountToGQL} from '../entities/Mappers';

@Resolver()
@UseGuards(AuthGuard)
export class AccountResolver {
  constructor(private readonly accountManager: IAccountManager) {}

  @Query(() => Account)
  async myAccount(@CurrentSession() {userId}: Session) {
    return mapAccountToGQL(await this.accountManager.getMyAccount(userId));
  }

  @Mutation(() => Account)
  async updateMyAccount(
    @CurrentSession() {userId}: Session,
    @Args('user', new ValidationPipe()) userInput: UserUpdateRequest, // TODO: remove ValidationPipe?
  ) {
    return mapAccountToGQL(
      await this.accountManager.updateAccount(userId, {
        name: userInput.name,
        email: userInput.email,
      }),
    );
  }
}
