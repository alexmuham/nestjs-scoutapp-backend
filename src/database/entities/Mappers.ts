import DbUser from './User';
import User from '../../entities/User';
import Account from '../../entities/Account';
import Preferences from '../../entities/Preferences';

export const mapUserFromDb = (user: DbUser): User => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phoneNumber: user.phoneNumber,
  allowNotifications: user.allowNotifications,
  email: user.email,
  education: user.education,
});

export const mapPreferencesFromDB = (user: DbUser): Preferences => ({
  allowNotifications: user.allowNotifications,
});

export const mapAccountFromDB = (account: DbUser): Account => ({
  user: mapUserFromDb(account),
  preferences: mapPreferencesFromDB(account),
});
