import {Module} from '@nestjs/common';
import {StoresModule} from 'database/stores/StoresModule';
import IAccountManager from './account/IAccountManager';
import AccountManager from './account/AccountManager';
import {AuthModule} from './auth/AuthModule';
import {ServicesModule} from 'services/ServicesModule';
import IPlayerManager from './player/IPlayerManager';
import PlayerManager from './player/PlayerManager';
import INotificationsManager from './notifications/INotificationsManager';
import NotificationsManager from './notifications/NotificationsManager';

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
    {
      provide: INotificationsManager,
      useClass: NotificationsManager,
    },
  ],
  exports: [
    //
    IAccountManager,
    AuthModule,
    IPlayerManager,
    IFileManager,
    INotificationsManager,
  ],
})
export class ManagerModule {}
