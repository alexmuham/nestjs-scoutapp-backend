import Notifications from '../../entities/Notifications';
import {ID} from '../../entities/Common';

export default abstract class INotificationsManager {
  abstract getMyNotificationsSettings(myUserId: ID): Promise<Notifications>;

  abstract updateNotificationsSettings(
    userId: string,
    friendRequest: boolean,
    playersMatching: boolean,
    messages: boolean,
    sendNotificationsToEmail: boolean,
  ): Promise<Notifications>;
}
