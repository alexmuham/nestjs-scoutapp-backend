export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Preferences = {
   __typename?: 'Preferences';
  id: Scalars['String'];
  enableFriendRequestNotification: Scalars['Boolean'];
  enablePlayerMatchingNotification: Scalars['Boolean'];
  enableMessageNotification: Scalars['Boolean'];
  sendNotificationsToEmail: Scalars['Boolean'];
  players: Array<Scalars['String']>;
};

export type CareerProgressions = {
   __typename?: 'CareerProgressions';
  id: Scalars['String'];
  progress: Scalars['String'];
};

export type Ranking = {
   __typename?: 'Ranking';
  id: Scalars['String'];
  top: Scalars['String'];
  percentile: Scalars['String'];
  average: Scalars['String'];
};

export type PercentileRankings = {
   __typename?: 'PercentileRankings';
  id: Scalars['String'];
  FB?: Maybe<Ranking>;
  C?: Maybe<Ranking>;
  oneB?: Maybe<Ranking>;
  tenSPL?: Maybe<Ranking>;
  sixty?: Maybe<Ranking>;
  IF?: Maybe<Ranking>;
  pop?: Maybe<Ranking>;
};

export type PgEventResults = {
   __typename?: 'PGEventResults';
  id: Scalars['String'];
  fastballVelocity?: Maybe<Scalars['String']>;
  tenYdSplit?: Maybe<Scalars['String']>;
  infieldVelocity?: Maybe<Scalars['String']>;
  exitVelocity?: Maybe<Scalars['String']>;
  sixtyYdDash?: Maybe<Scalars['String']>;
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
  careerProgressions?: Maybe<CareerProgressions>;
  percentileRankings?: Maybe<PercentileRankings>;
  pGEventResults?: Maybe<PgEventResults>;
  images: Array<Scalars['String']>;
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
  image?: Maybe<Scalars['String']>;
};

export type Account = {
   __typename?: 'Account';
  user: User;
  preferences: Preferences;
};

export type Query = {
   __typename?: 'Query';
  account: Account;
  friends: Array<User>;
  friendById: User;
  playerById: Player;
  getPlayers: Array<Player>;
  playersFromUser: Array<Player>;
  preferences: Preferences;
};


export type QueryFriendByIdArgs = {
  friendId: Scalars['String'];
};


export type QueryPlayerByIdArgs = {
  playerId: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addFriend: Scalars['Boolean'];
  deleteFriend: Scalars['Boolean'];
  addPlayerToUser: Scalars['Boolean'];
  deletePlayersToUser: Scalars['Boolean'];
  deletePlayerToUser: Scalars['Boolean'];
  addPlayerImage: Scalars['Boolean'];
  updatePreferences: Preferences;
};


export type MutationAddFriendArgs = {
  friendId: Scalars['String'];
};


export type MutationDeleteFriendArgs = {
  friendId: Scalars['String'];
};


export type MutationAddPlayerToUserArgs = {
  playerId: Scalars['String'];
};


export type MutationDeletePlayersToUserArgs = {
  playersIds: Array<Scalars['String']>;
};


export type MutationDeletePlayerToUserArgs = {
  playerId: Scalars['String'];
};


export type MutationAddPlayerImageArgs = {
  playerId: Scalars['String'];
  imageId: Scalars['String'];
};


export type MutationUpdatePreferencesArgs = {
  sendNotificationsToEmail?: Maybe<Scalars['Boolean']>;
  enableMessageNotification?: Maybe<Scalars['Boolean']>;
  enablePlayerMatchingNotification?: Maybe<Scalars['Boolean']>;
  enableFriendRequestNotification?: Maybe<Scalars['Boolean']>;
};
