import GraphqlApiBase from '@spryrocks/react-api/graphql/ApiBase';
import {myAccountQuery, playerByIdQuery, playersQuery} from './ScoutGraphqlQueryBuilder';
import {myAccountQuery, myNotificationsSettingsQuery} from './ScoutGraphqlQueryBuilder';
import {
  accountQuery,
  preferencesQuery,
  mutationUpdatePreferences,
} from './ScoutGraphqlQueryBuilder';
import UpdatePreferences from '../entities/UpdatePreferences';

export default class ScoutGraphqlApi extends GraphqlApiBase {
  public async queryAccount() {
    return this.query(accountQuery());
  }

  public async queryPlayerById(playerId: string) {
    return this.query(playerByIdQuery({playerId}));
  }

  public async queryPlayers() {
    return this.query(playersQuery());
  }

  public async queryMyNotificationsSettings() {
    return this.query(myNotificationsSettingsQuery());
  }

  public async queryPreferences() {
    return this.query(preferencesQuery());
  }

  public mutationPreferences(request: UpdatePreferences) {
    return this.mutation(mutationUpdatePreferences(request));
  }
}
