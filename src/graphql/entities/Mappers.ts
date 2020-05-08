import User from 'entities/User';
import GQLUser from './user/User';
import Account from '../../entities/Account';
import GQLAccount from './account/Account';
import Preferences from 'entities/Preferences';

export const mapUserToGQL = (user: User): GQLUser => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    education: user.education,
    image: user.image,
    email: user.email,
    allowNotifications: user.allowNotifications,
  };
};

export const mapPreferencesToGQL = (preferences: Preferences) => ({
  allowNotifications: preferences.allowNotifications,
});

export const mapAccountToGQL = (account: Account): GQLAccount => ({
  user: mapUserToGQL(account.user),
  preferences: mapPreferencesToGQL(account.preferences),
});
