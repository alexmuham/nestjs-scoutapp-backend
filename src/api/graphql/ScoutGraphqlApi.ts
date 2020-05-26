import GraphqlApiBase from '@spryrocks/react-api/graphql/ApiBase';
import {
  accountQuery,
  playerByIdQuery,
  userPlayersQuery,
  preferencesQuery,
  mutationUpdatePreferences,
  deletePlayerMutation,
  addPlayerMutation,
  deletePlayersMutation,
  addPlayerImageMutation,
  addFriendMutation,
  deleteFriendMutation,
  friendQuery,
  friendsQuery,
  playersQuery,
  playersBySearchParametersQuery,
} from './ScoutGraphqlQueryBuilder';
import UpdatePreferences from '../entities/UpdatePreferences';

export default class ScoutGraphqlApi extends GraphqlApiBase {
  public async queryAccount() {
    return this.query(accountQuery());
  }

  public async queryPlayerById(playerId: string) {
    return this.query(playerByIdQuery({playerId}));
  }

  public async queryUserPlayers() {
    return this.query(userPlayersQuery());
  }

  public async queryPreferences() {
    return this.query(preferencesQuery());
  }

  public async mutationPreferences(request: UpdatePreferences) {
    return this.mutation(mutationUpdatePreferences(request));
  }

  public async mutationDeletePlayers(playersIds: string[]) {
    return this.mutation(deletePlayersMutation({playersIds}));
  }

  public async mutationDeletePlayer(playerId: string) {
    return this.mutation(deletePlayerMutation({playerId}));
  }

  public async mutationAddPlayer(playerId: string) {
    return this.mutation(addPlayerMutation({playerId}));
  }

  public async mutationAddPlayerImage(playerId: string, imageId: string) {
    return this.mutation(addPlayerImageMutation({playerId, imageId}));
  }

  public async mutationAddFriend(friendId: string) {
    return this.mutation(addFriendMutation({friendId}));
  }

  public async mutationDeleteFriend(friendId: string) {
    return this.mutation(deleteFriendMutation({friendId}));
  }

  public async queryFriend(friendId: string) {
    return this.mutation(friendQuery({friendId}));
  }

  public async queryFriends() {
    return this.mutation(friendsQuery());
  }

  public async queryPlayers() {
    return this.query(playersQuery());
  }

  public async queryPlayersBySearchParameters(
    name: string | undefined,
    height: number[],
    weight: number[],
    position: string[] | undefined,
    graduatingClass: number[],
    commitment: string | undefined,
    bat: string | undefined,
    playerThrows: string | undefined,
    sixtyTime: number[],
    positionVelocity: string | undefined,
    tenYard: number[],
    exitVelocity: number[],
  ) {
    return this.query(
      playersBySearchParametersQuery({
        bat,
        commitment,
        exitVelocity,
        graduatingClass,
        height,
        name,
        playerThrows,
        position,
        positionVelocity,
        sixtyTime,
        tenYard,
        weight,
      }),
    );
  }
}
