import GraphqlApiBase from '@spryrocks/react-api/graphql/ApiBase';
import {myAccountQuery, playerByIdQuery, playersQuery} from './ScoutGraphqlQueryBuilder';
import {myAccountQuery, myNotificationsSettingsQuery} from './ScoutGraphqlQueryBuilder';
import {
  myAccountQuery,
  myNotificationsSettingsQuery,
  mutationUpdateNotificationsSettings,
} from './ScoutGraphqlQueryBuilder';
import UpdateNotificationsSettings from '../entities/UpdateNotificationsSettings';

export default class ScoutGraphqlApi extends GraphqlApiBase {
  public async queryMyAccount() {
    return this.query(myAccountQuery());
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

  public mutationNotificationsSettings(request: UpdateNotificationsSettings) {
    return this.mutation(mutationUpdateNotificationsSettings(request));
  }
}
