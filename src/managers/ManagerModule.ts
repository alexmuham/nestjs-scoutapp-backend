import {Module} from '@nestjs/common';
import {StoresModule} from 'database/stores/StoresModule';
import IAccountManager from './account/IAccountManager';
import AccountManager from './account/AccountManager';
import {AuthModule} from './auth/AuthModule';
import {StorageModule} from 'services/storage/StorageModule';
import {ServicesModule} from 'services/ServicesModule';
import IPlayerManager from './player/IPlayerManager';
import PlayerManager from './player/PlayerManager';
import IPreferencesManager from './preferences/IPreferencesManager';
import PreferencesManager from './preferences/PreferencesManager';
import IFileManager from './file/IFileManager';
import FileManager from './file/FileManager';
import IReportsManager from './reports/IReportsManager';
import ReportsManager from './reports/ReportsManager';
import INotificationManager from "./notifications/INotificationManager";
import NotificationManager from "./notifications/NotificationManager";

@Module({
  imports: [
    //
    AuthModule,
    ServicesModule,
    StoresModule,
    StorageModule,
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
      provide: IPreferencesManager,
      useClass: PreferencesManager,
    },
    {
      provide: IFileManager,
      useClass: FileManager,
    },
    {
      provide: IReportsManager,
      useClass: ReportsManager,
    },
    {
      provide: INotificationManager,
      useClass: NotificationManager,
    },
  ],
  exports: [
    //
    IAccountManager,
    AuthModule,
    IPlayerManager,
    IPreferencesManager,
    IFileManager,
    IReportsManager,
    INotificationManager
  ],
})
export class ManagerModule {}
