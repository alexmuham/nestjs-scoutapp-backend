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
  addGeneralReportsMutation,
  addProReportsMutation,
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

  public async mutationAddGeneralReports(
    filesIds: string[] | undefined,
    date: Date,
    notes: string,
    playerId: string,
  ) {
    await this.mutation(
      addGeneralReportsMutation({date, notes, playerId, videosIds: filesIds}),
    );
  }

  public async mutationAddProReport(
    dateValue: Date,
    position: string,
    round: string,
    games: string,
    innings: string,
    ABs: string,
    raw: string,
    adj: string,
    current: string,
    future: string,
    physicalDest: string,
    playerComp: string,
    hittingAbilityP: string,
    hittingAbilityF: string,
    hittingAbilityAdj: string,
    hitAppTypeP: string,
    hitAppTypeF: string,
    hitAppTypeAbj: string,
    powerFreqP: string,
    powerFreqF: string,
    powerFreqAbj: string,
    rawPwrP: string,
    rawPwrF: string,
    rawPwrAbj: string,
    runningAbilityP: string,
    runningAbilityF: string,
    runningAbilityAbj: string,
    baseStealerP: string,
    baseStealerF: string,
    baseStealerAbj: string,
    armStrengthP: string,
    armStrengthF: string,
    armStrengthAbj: string,
    fieldingAbilityP: string,
    fieldingAbilityF: string,
    fieldingAbilityAbj: string,
    handsP: string,
    handsF: string,
    handsAbj: string,
    rangeP: string,
    rangeF: string,
    rangeAbj: string,
    feetP: string,
    feetF: string,
    feetAbj: string,
    canHePlayP: string,
    canHePlayF: string,
    canHePlayAbj: string,
    aggressiveness: string,
    athleticism: string,
    bodyControl: string,
    instincts: string,
    competitiveness: string,
    baseballIQ: string,
    handEyeControl: string,
    BP: string,
    infield: string,
    OFPOffense: string,
    OFPDefense: string,
    homeToFirst: string,
    sixtyYard: string,
    fortyYard: string,
    posInOrder: string,
    character: string,
    entryLevel: string,
    ETA: string,
    howWellKnown: string,
    howWellKnownComment: string,
    howWellSeen: string,
    howWellSeenComment: string,
    signAbility: string,
    signAbilityComment: string,
    playerId: string,
    matchDate: Date,
  ) {
    await this.mutation(
      addProReportsMutation({
        date: dateValue,
        ABs,
        adj,
        aggressiveness,
        armStrengthAbj,
        armStrengthF,
        armStrengthP,
        athleticism,
        baseballIQ,
        baseStealerAbj,
        baseStealerF,
        baseStealerP,
        bodyControl,
        BP,
        canHePlayAbj,
        canHePlayF,
        canHePlayP,
        character,
        competitiveness,
        current,
        entryLevel,
        ETA,
        feetAbj,
        feetF,
        feetP,
        fieldingAbilityAbj,
        fieldingAbilityF,
        fieldingAbilityP,
        fortyYard,
        future,
        games,
        handEyeControl,
        handsAbj,
        handsF,
        handsP,
        hitAppTypeAbj,
        hitAppTypeF,
        hitAppTypeP,
        hittingAbilityAdj,
        hittingAbilityF,
        hittingAbilityP,
        homeToFirst,
        howWellKnown,
        howWellKnownComment,
        howWellSeen,
        howWellSeenComment,
        infield,
        innings,
        instincts,
        matchDate,
        OFPDefense,
        OFPOffense,
        physicalDest,
        playerComp,
        playerId,
        posInOrder,
        position,
        powerFreqAbj,
        powerFreqF,
        powerFreqP,
        rangeAbj,
        rangeF,
        rangeP,
        raw,
        rawPwrAbj,
        rawPwrF,
        rawPwrP,
        round,
        runningAbilityAbj,
        runningAbilityF,
        runningAbilityP,
        signAbility,
        signAbilityComment,
        sixtyYard,
      }),
    );
  }
}
