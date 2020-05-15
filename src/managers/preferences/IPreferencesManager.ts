import Preferences from '../../entities/Preferences';
import {ID} from '../../entities/Common';

export default abstract class IPreferencesManager {
  abstract getPreferences(myUserId: ID): Promise<Preferences>;

  abstract updatePreferences(
    userId: string,
    enableFriendRequestNotification?: boolean,
    enablePlayerMatchingNotification?: boolean,
    enableMessageNotification?: boolean,
    sendNotificationsToEmail?: boolean,
  ): Promise<Preferences>;
}
