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
  preferences: Preferences;
  phoneNumber: Scalars['String'];
  education: Scalars['String'];
};

export type Preferences = {
   __typename?: 'Preferences';
  id: Scalars['ID'];
  enableFriendRequestNotification: Scalars['Boolean'];
  enablePlayerMatchingNotification: Scalars['Boolean'];
  enableMessageNotification: Scalars['Boolean'];
  sendNotificationsToEmail: Scalars['Boolean'];
};

export type Account = {
   __typename?: 'Account';
  user: User;
  preferences: Preferences;
};

export type Player = {
   __typename?: 'Player';
  id: Scalars['ID'];
  name: Scalars['String'];
  externalId: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['String'];
  bats: Scalars['String'];
  throws: Scalars['String'];
  graduatingClass: Scalars['String'];
  primaryPosition: Scalars['String'];
  highSchool: Scalars['String'];
  contactPhone: Scalars['String'];
  highSchoolContactPhone: Scalars['String'];
  statePositionRanking: Scalars['String'];
  stateOverallRanking: Scalars['String'];
  nationalPositionRanking: Scalars['String'];
  nationalOverallRanking: Scalars['String'];
  collegeCommitment: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  account: Account;
  myAccount: Account;
  playerById: Player;
  getPlayers: Array<Player>;
};


export type QueryPlayerByIdArgs = {
  playerId: Scalars['String'];
};

export type MutationUpdatePreferencesArgs = {
  enableFriendRequestNotification?: Maybe<Scalars['Boolean']>,
  enablePlayerMatchingNotification?: Maybe<Scalars['Boolean']>,
  enableMessageNotification?: Maybe<Scalars['Boolean']>,
  sendNotificationsToEmail?: Maybe<Scalars['Boolean']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  updatePreferences: Boolean,
};
