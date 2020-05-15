import Notifications from 'database/entities/Notifications';
import {ID} from '../../../entities/Common';

export default abstract class INotificationsStore {
  abstract createNotifications(
    friendRequest: boolean,
    playersMatching: boolean,
    messages: boolean,
    sendNotificationsToEmail: boolean,
  ): Promise<Notifications>;

  abstract getMyNotificationsSettings(id: string): Promise<Notifications | undefined>;

  abstract getNotificationsOrFail(notificationsId: ID): Promise<Notifications>;

  abstract updateNotificationsSettings(
    userId: string,
    friendRequest?: boolean,
    playersMatching?: boolean,
    messages?: boolean,
    sendNotificationsToEmail?: boolean,
  ): Promise<Notifications>;
}
