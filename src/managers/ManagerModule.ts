import {Module} from '@nestjs/common';
import {StoresModule} from 'database/stores/StoresModule';
import IAccountManager from './account/IAccountManager';
import AccountManager from './account/AccountManager';
import {AuthModule} from './auth/AuthModule';
import {ServicesModule} from 'services/ServicesModule';
import IPlayerManager from './player/IPlayerManager';
import PlayerManager from './player/PlayerManager';

@Module({
  imports: [
    //
    AuthModule,
    ServicesModule,
    StoresModule,
  ],
  providers: [
    {
      provide: IAccountManager,
      useClass: AccountManager,
    },
    {
      provide: IPlayerManager,
      useClass: PlayerManager,
    },
  ],
  exports: [
    //
    IAccountManager,
    AuthModule,
    IPlayerManager,
  ],
})
export class ManagerModule {}
