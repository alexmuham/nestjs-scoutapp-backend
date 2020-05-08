import GraphqlApiBase from '@spryrocks/react-api/graphql/ApiBase';
import {myAccountQuery} from './ScoutGraphqlQueryBuilder';

export default class ScoutGraphqlApi extends GraphqlApiBase {
  public async queryMyAccount() {
    return this.query(myAccountQuery());
  }
}
