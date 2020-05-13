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
import IFileStore from './file/IFileStore';
import FileStore from './file/FileStore';
import INotificationsStore from './notifications/INotificationsStore';
import NotificationsStore from './notifications/NotificationsStore';

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
      provide: INotificationsStore,
      useClass: NotificationsStore,
    },
  ],
  exports: [
    //
    ISessionStore,
    ILoginStore,
    IUserStore,
    IPlayerStore,
    IFileStore,
    INotificationsStore,
  ],
})
export class StoresModule {}
