import {Module} from '@nestjs/common';
import {StoresModule} from 'database/stores/StoresModule';
import IAccountManager from './account/IAccountManager';
import AccountManager from './account/AccountManager';
import {AuthModule} from './auth/AuthModule';
import IFileManager from './file/IFileManager';
import FileManager from './file/FileManager';
import {StorageModule} from 'services/storage/StorageModule';
import {ServicesModule} from 'services/ServicesModule';
import IPlayerManager from './player/IPlayerManager';
import PlayerManager from './player/PlayerManager';
import IPreferencesManager from './preferences/IPreferencesManager';
import PreferencesManager from './preferences/PreferencesManager';

@Module({
  imports: [
    //
    AuthModule,
    ServicesModule,
    StoresModule,
    StorageModule
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
  ],
  exports: [
    //
    IAccountManager,
    AuthModule,
    IPlayerManager,
    IPreferencesManager,
    IFileManager,
  ],
})
export class ManagerModule {}
