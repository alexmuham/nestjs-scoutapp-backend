import {Preferences} from 'database/entities';
import {ID} from 'entities';

export default abstract class IPreferencesStore {
  abstract createPreferences(
    enableFriendRequestNotification: boolean,
    enablePlayerMatchingNotification: boolean,
    enableMessageNotification: boolean,
    sendNotificationsToEmail: boolean,
  ): Promise<Preferences>;

  abstract getPreferences(id: string): Promise<Preferences | undefined>;

  abstract getPreferencesOrFail(preferencesId: ID): Promise<Preferences>;

  abstract updatePreferences(
    userId: string,
    enableFriendRequestNotification?: boolean,
    enablePlayerMatchingNotification?: boolean,
    enableMessageNotification?: boolean,
    sendNotificationsToEmail?: boolean,
  ): Promise<Preferences>;
}
