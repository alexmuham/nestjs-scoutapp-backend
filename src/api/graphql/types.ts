export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  allowNotifications: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
  image: Scalars['String'];
  education: Scalars['String'];
};

export type Preferences = {
   __typename?: 'Preferences';
  allowNotifications: Scalars['Boolean'];
};

export type Account = {
   __typename?: 'Account';
  user: User;
  preferences: Preferences;
};

export type Query = {
   __typename?: 'Query';
  myAccount: Account;
};
