import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
// import Session from 'auth/Session';
// import {ScoutApi as Api} from 'api';
// import {AuthInfoKeeper} from 'auth';
// import {mapRegisterRequestToApi} from 'api/Mappers';
// import actions, {AuthCompleted, RegisterUser} from './actions';
// import {actions as alertActions} from '../alert';
// // import {actions as snackActions} from '../snackBar';
// import {actions as sessionActions} from '../session';
import {actions as routerActions} from '../router';
import {NavigationPayload} from '../router/actions';



// function* registerUser({payload: {request, history}}: Action<RegisterUser>) {
//   try {
//     const session: Session = yield Api.register(mapRegisterRequestToApi(request));
//     yield put(actions.authCompleted({session, history}));
//   } catch (e) {
//     yield put(actions.authCompleted(e));
//   }
// }
//
// function* authCompleted({payload, error}: Action<AuthCompleted>) {
//   if (error) {
//     yield put(alertActions.showError(payload));
//     return;
//   }
//
//   yield AuthInfoKeeper.authenticate(payload.session);
//   yield put(sessionActions.setSessionExists(true));
//   yield put(routerActions.navigateToMain(payload));
//   yield put(sessionActions.fetchSession());
// }
//
function* openSettings({payload}: Action<NavigationPayload>) {
  yield put(routerActions.navigateToSettings(payload));
  // yield put(sessionActions.fetchSession());
}

export default function* () {
  yield all([
    takeEvery(types.OPEN_SETTINGS, openSettings),
    // takeEvery(types.AUTH_COMPLETED, authCompleted),
  ]);
}
