export default interface Notifications {
  id: string;
  friendRequest?: boolean;
  playersMatching?: boolean;
  messages?: boolean;
  sendNotificationsToEmail?: boolean;
}
