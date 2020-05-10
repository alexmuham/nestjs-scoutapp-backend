import {all} from 'redux-saga/effects';
//
// function navigateTo(
//   key: NavigatorKey,
//   flag?: NavigatorUtils.NavigationFlag,
//   props?: any,
// ) {
//   NavigatorUtils.navigateTo(keyToString(key), flag, props);
// }
//
// function goBack() {
//   NavigatorUtils.goBack();
// }
//
// function* accountEntered() {
//   const session: LoadableContainer<any> = yield select((state: State) => state.session);
//   if (!session.isSuccess && !session.isLoading) {
//     yield put(sessionActions.fetchSession());
//   }
// }
//
// function navigateToAuth() {
//   navigateTo(NavigatorKey.Auth, NavigatorUtils.NavigationFlag.Replace);
// }
//
// function navigateToMain() {
//   navigateTo(NavigatorKey.Main, NavigatorUtils.NavigationFlag.Reset);
// }

export default function* () {
  yield all([
    // takeEvery(types.GO_BACK, goBack),
    // takeEvery(types.NAVIGATE_TO_AUTH, navigateToAuth),
    // takeEvery(types.ACCOUNT_ENTERED, accountEntered),
    // takeEvery(types.NAVIGATE_TO_MAIN, navigateToMain),
  ]);
}
