export default interface IScoutApiTokenHolders {
  getToken(): AvikastApiToken | undefined;
  setToken(token: AvikastApiToken | undefined): void;
}

export type AvikastApiToken = string;
