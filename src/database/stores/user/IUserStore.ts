import {ID} from 'entities';
import {User, Player, Reports,  GeneralReports, Notification} from 'database/entities';

export default abstract class IUserStore {
  abstract createUser(user: Partial<User>): Promise<User>;

  abstract addPlayerToUser(players: Player[], userId: ID): Promise<void>;

  abstract deletePlayerToUser(players: string, userId: ID): Promise<void>;

  abstract getUserById(userId: ID): Promise<User | undefined>;

  abstract addFriend(userId: ID, friend: User): Promise<void>;

  abstract deleteFriend(userId: ID, friendId: string): Promise<void>;

  abstract getFriendById(userId: ID, friendId: string): Promise<User | undefined>;

  abstract addReportToUser(reports: Reports[], userId: string): Promise<void>;

  abstract addNotificationToUser(notifications: Notification[], id: ID): Promise<void>;

  abstract deleteNotificationToUser(notificationId: ID, userId: ID): Promise<void>;
  abstract addGenReportToUser(
    genReports: GeneralReports[],
    userId: string,
  ): Promise<void>;
}
