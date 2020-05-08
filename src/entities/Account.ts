import User from 'entities/User';
import Preferences from 'graphql/entities/user/Preferences';

export default interface Account {
  user: User;
  preferences: Preferences;
}
