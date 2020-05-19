export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  preferencesId: Scalars['String'];
  phoneNumber: Scalars['String'];
  education: Scalars['String'];
  players?: Maybe<Array<Player>>;
};

export type Preferences = {
   __typename?: 'Preferences';
  id: Scalars['String'];
  enableFriendRequestNotification: Scalars['Boolean'];
  enablePlayerMatchingNotification: Scalars['Boolean'];
  enableMessageNotification: Scalars['Boolean'];
  sendNotificationsToEmail: Scalars['Boolean'];
};

export type UpdatePreferencesRequest = {
   __typename?: 'Preferences';
  enableFriendRequestNotification?: Maybe<Scalars['Boolean']>;
  enablePlayerMatchingNotification?: Maybe<Scalars['Boolean']>;
  enableMessageNotification?: Maybe<Scalars['Boolean']>;
  sendNotificationsToEmail?: Maybe<Scalars['Boolean']>;
};

export type Account = {
   __typename?: 'Account';
  user: User;
  preferences: Preferences;
};

export type Query = {
   __typename?: 'Query';
  account: Account;
  playerById: Player;
  getPlayers: Array<Player>;
  playersFromUser: Array<Player>;
  preferences: Preferences;
};


export type QueryPlayerByIdArgs = {
  playerId: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addPlayerToUser: Scalars['Boolean'];
  deletePlayersToUser: Scalars['Boolean'];
  updatePreferences: Preferences;
};


export type MutationAddPlayerToUserArgs = {
  playerId: Scalars['String'];
};


export type MutationDeletePlayersToUserArgs = {
  playersIds: Array<Scalars['String']>;
};


export type MutationUpdatePreferencesArgs = {
  sendNotificationsToEmail?: Maybe<Scalars['Boolean']>;
  enableMessageNotification?: Maybe<Scalars['Boolean']>;
  enablePlayerMatchingNotification?: Maybe<Scalars['Boolean']>;
  enableFriendRequestNotification?: Maybe<Scalars['Boolean']>;
};
