import {IScoutApi} from 'api/IScoutApi';
import RegisterRequest from './entities/RegisterRequest';
import LoginRequest from './entities/LoginRequest';
import RestApi from 'api/rest/RestApi';
import ApiConfiguration from '@spryrocks/react-api/ApiConfiguration';
import ScoutGraphqlApi from 'api/graphql/ScoutGraphqlApi';
import {mapMyAccountFromGQL, mapPlayerFromGQL, mapPlayersFromGQL} from 'api/Mappers';
import {ApolloError} from 'apollo-boost';
import ApiHttpError from '@spryrocks/react-api/rest/ApiHttpError';
import ApiError from '@spryrocks/react-api/rest/ApiError';
import ForgotPasswordRequest from 'api/entities/ForgotPasswordRequest';
import {AuthInfoKeeper} from 'auth';
import {ScoutApiTokenHolders} from 'api/index';
import ApiDelegate from '@spryrocks/react-api/ApiDelegate';
import {getHeaders} from 'api/ScoutApiUtils';
import {filter} from 'ramda';
import Queue from 'promise-queue';

import UpdateFirebaseTokenRequest from 'api/entities/UpdateFirebaseTokenRequest';

export default class ScoutApi implements IScoutApi {
  private refreshQueue = new Queue(1, Infinity);

  private readonly restApi: RestApi;

  private readonly graphqlApi: ScoutGraphqlApi;

  // @ts-ignore
  constructor(private configuration: ApiConfiguration) {
    let baseUrl = `${configuration.url}:${configuration.port}`;
    if (configuration.globalPrefix) baseUrl += configuration.globalPrefix;

    // @ts-ignore
    const delegate: ApiDelegate = {
      getHeaders,
    };

    this.graphqlApi = new ScoutGraphqlApi(baseUrl, configuration.graphql, delegate);
    this.restApi = new RestApi(baseUrl, configuration.rest, delegate);
  }

  public async register(request: RegisterRequest) {
    return this.restApi.register(request);
  }

  public async login(request: LoginRequest) {
    return this.restApi.login(request);
  }

  public async myAccount() {
    return this.wrapApiCall(async () =>
      mapMyAccountFromGQL(await this.graphqlApi.queryMyAccount()),
    );
  }

  public async wrapApiCall<TResponse>(
    call: () => Promise<TResponse>,
  ): Promise<TResponse> {
    try {
      return await call();
    } catch (e) {
      if (ScoutApi.checkNotAuthorizedError(e)) {
        await this.refreshQueue.add(() => this.refreshTokens());
        // eslint-disable-next-line no-return-await
        return await call();
      }
      throw e;
    }
  }

  private static checkNotAuthorizedError(e: ApolloError | ApiHttpError) {
    if (e instanceof ApiError) {
      return e.status === 401;
    }
    // @ts-ignore
    const gqlError = filter((e) => e.message.statusCode === 401, e.graphQLErrors);
    return !!gqlError;
  }

  public async refreshTokens() {
    const authInfo = await AuthInfoKeeper.getAuthInfo();
    if (!authInfo) {
      throw new Error('Not authorized');
    }
    const authResponse = await this.restApi.refresh({
      refreshToken: authInfo.refreshToken,
    });
    await AuthInfoKeeper.update(authResponse);
    ScoutApiTokenHolders.setToken(authResponse.jwt);
  }

  public async forgotPassword(request: ForgotPasswordRequest) {
    return this.restApi.forgotPassword(request);
  }

  public async updateUserPassword(oldPassword: string, password: string) {
    return this.wrapApiCall(async () =>
      this.restApi.changePassword({oldPassword, password}),
    );
  }

  public async updateFirebaseToken(request: UpdateFirebaseTokenRequest) {
    return this.wrapApiCall(async () => this.restApi.updateFirebaseToken(request));
  }

  public async getPlayerById(playerId: string) {
    return this.wrapApiCall(async () =>
      mapPlayerFromGQL(await this.graphqlApi.queryPlayerById(playerId)),
    );
  }

  public async getPlayers() {
    return this.wrapApiCall(async () =>
      mapPlayersFromGQL(await this.graphqlApi.queryPlayers()),
    );
  }
}
