import IScoutApiTokenHolders, {AvikastApiToken} from 'api/IScoutApiTokenHolders';

export default class ScoutApiTokenHolders implements IScoutApiTokenHolders {
  private token: AvikastApiToken | undefined = undefined;

  setToken(token: AvikastApiToken | undefined) {
    this.token = token;
  }

  getToken(): AvikastApiToken | undefined {
    return this.token;
  }
}
