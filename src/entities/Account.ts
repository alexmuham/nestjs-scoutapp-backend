import User from 'entities/User';
import Notifications from '../graphql/entities/user/Notifications';

export default interface Account {
  user: User;
  notifications: Notifications;
}
