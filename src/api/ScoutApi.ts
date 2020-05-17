import {IScoutApi} from 'api/IScoutApi';
import RegisterRequest from './entities/RegisterRequest';
import LoginRequest from './entities/LoginRequest';
import RestApi from 'api/rest/RestApi';
import ApiConfiguration from '@spryrocks/react-api/ApiConfiguration';
import ScoutGraphqlApi from 'api/graphql/ScoutGraphqlApi';
import {
  mapMyAccountFromGQL,
  mapPlayerFromGQL,
  mapPlayersFromGQL,
  mapPreferencesFromGQL,
} from 'api/Mappers';
import ForgotPasswordRequest from 'api/entities/ForgotPasswordRequest';
import ApiDelegate, {AuthInfo} from '@spryrocks/react-api/ApiDelegate';
import IApiTokenHolder from '@spryrocks/react-api/IApiTokenHolder';
import UpdateFirebaseTokenRequest from 'api/entities/UpdateFirebaseTokenRequest';
import {ApiBase} from '@spryrocks/react-api';
import UpdatePreferences from './entities/UpdatePreferences';

export default class ScoutApi extends ApiBase implements IScoutApi {
  private readonly restApi: RestApi;

  private readonly graphqlApi: ScoutGraphqlApi;

  constructor(
    configuration: ApiConfiguration,
    delegate: ApiDelegate,
    tokenHolder: IApiTokenHolder,
  ) {
    super(configuration, delegate, tokenHolder);
    this.graphqlApi = new ScoutGraphqlApi(
      this.baseUrl,
      configuration.graphql,
      this.delegate,
    );
    this.restApi = new RestApi(this.baseUrl, configuration.rest, this.delegate);
  }

  public async register(request: RegisterRequest) {
    return this.restApi.register(request);
  }

  public async login(request: LoginRequest) {
    return this.restApi.login(request);
  }

  public async account() {
    return this.wrapApiCall(async () =>
      mapMyAccountFromGQL(await this.graphqlApi.queryAccount()),
    );
  }

  public async preferences() {
    return this.wrapApiCall(async () =>
      mapPreferencesFromGQL(await this.graphqlApi.queryPreferences()),
    );
  }

  public async updatePreferences(request: UpdatePreferences) {
    return this.wrapApiCall(async () =>
      mapPreferencesFromGQL(await this.graphqlApi.mutationPreferences(request)),
    );
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

  protected async refreshToken(refreshToken: string): Promise<AuthInfo> {
    const session = await this.restApi.refresh({refreshToken});
    return {accessToken: session.jwt, refreshToken: session.refreshToken};
  }
}
