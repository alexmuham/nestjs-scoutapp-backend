import {Module} from '@nestjs/common';
import {DatabaseModule} from '../DatabaseModule';
import ILoginStore from './login/ILoginStore';
import LoginStore from './login/LoginStore';
import ISessionStore from 'database/stores/session/ISessionStore';
import SessionStore from 'database/stores/session/SessionStore';
import IUserStore from './user/IUserStore';
import UserStore from './user/UserStore';
import IPlayerStore from './player/IPlayerStore';
import PlayerStore from './player/PlayerStore';
import IPreferencesStore from './preferences/IPreferencesStore';
import PreferencesStore from './preferences/PreferencesStore';
import IFileStore from './file/IFileStore';
import FileStore from './file/FileStore';
import IReportsStore from './reports/IReportsStore';
import ReportsStore from './reports/ReportsStore';
import INotificationStore from './notification/INotificationStore';
import NotificationStore from './notification/NotificationStore';

@Module({
  imports: [
    //
    DatabaseModule,
  ],
  providers: [
    {
      provide: IUserStore,
      useClass: UserStore,
    },
    {
      provide: ILoginStore,
      useClass: LoginStore,
    },
    {
      provide: ISessionStore,
      useClass: SessionStore,
    },
    {
      provide: IPlayerStore,
      useClass: PlayerStore,
    },
    {
      provide: IPreferencesStore,
      useClass: PreferencesStore,
    },
    {
      provide: IFileStore,
      useClass: FileStore,
    },
    {
      provide: IReportsStore,
      useClass: ReportsStore,
    },
    {
      provide: INotificationStore,
      useClass: NotificationStore,
    },
  ],
  exports: [
    //
    ISessionStore,
    ILoginStore,
    IUserStore,
    IPlayerStore,
    IPreferencesStore,
    IFileStore,
    IReportsStore,
    INotificationStore,
  ],
})
export class StoresModule {}
