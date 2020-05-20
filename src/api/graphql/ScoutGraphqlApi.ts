import GraphqlApiBase from '@spryrocks/react-api/graphql/ApiBase';
import {
  accountQuery,
  playerByIdQuery,
  userPlayersQuery,
  preferencesQuery,
  mutationUpdatePreferences,
  deletePlayerMutation,
  addPlayerMutation,
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
    return this.mutation(deletePlayerMutation({playersIds}));
  }

  public async mutationAddPlayer(playerId: string) {
    return this.mutation(addPlayerMutation({playerId}));
  }
}
