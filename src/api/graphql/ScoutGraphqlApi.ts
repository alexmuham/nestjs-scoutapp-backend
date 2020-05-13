import GraphqlApiBase from '@spryrocks/react-api/graphql/ApiBase';
import {myAccountQuery, playerByIdQuery, playersQuery} from './ScoutGraphqlQueryBuilder';

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
}
