import {Module} from '@nestjs/common';
import {StoresModule} from 'database/stores/StoresModule';
import IAccountManager from './account/IAccountManager';
import AccountManager from './account/AccountManager';
import {AuthModule} from './auth/AuthModule';
import IFileManager from './file/IFileManager';
import FileManager from './file/FileManager';
import {StorageModule} from 'storage/StorageModule';
import {ServicesModule} from 'services/ServicesModule';

@Module({
  imports: [
    //
    StoresModule,
    AuthModule,
    StorageModule,
    ServicesModule,
  ],
  providers: [
    {
      provide: IAccountManager,
      useClass: AccountManager,
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
    IFileManager,
  ],
})
export class ManagerModule {}
