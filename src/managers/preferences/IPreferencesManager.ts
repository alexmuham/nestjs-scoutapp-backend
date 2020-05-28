import {ID, Preferences} from 'entities';

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
