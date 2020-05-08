import {Module} from '@nestjs/common';
import {StoresModule} from 'database/stores/StoresModule';
import IAccountManager from './account/IAccountManager';
import AccountManager from './account/AccountManager';
import {AuthModule} from './auth/AuthModule';
import {ServicesModule} from 'services/ServicesModule';
import AuthManager from './auth/AuthManager';
import IAuthManager from './auth/IAuthManager';
import FileManager from './file/FileManager';
import IFileManager from './file/IFileManager';

@Module({
  imports: [
    //
    StoresModule,
    AuthModule,
    ServicesModule,
  ],
  providers: [
    {
      provide: IAccountManager,
      useClass: AccountManager,
    },
    {
      provide: IAuthManager,
      useClass: AuthManager,
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
    IAuthManager,
    IFileManager,
  ],
})
export class ManagerModule {}
