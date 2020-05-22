import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {DeleteFriends} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {NavigationPayload} from '../router/actions';
import {errorActions} from '../error';
import {routerActions} from '../router';
import Friends from 'entities/Friends';

function* fetchFriends({payload}: Action<NavigationPayload>) {
  try {
    const friends = yield ScoutApi.getFriends();
    yield put(actions.fetchFriendsComplete({friends, payload}));
  } catch (e) {
    yield put(actions.fetchFriendsComplete(e));
  }
}

function* fetchFriendsComplete({payload, error}: Action<Friends>) {
  if (error) {
    yield put(errorActions.handleError(payload));
  }
}

function* deleteFriends({payload}: Action<DeleteFriends>) {
  try {
    yield payload.friendsIds.map((id) => ScoutApi.deleteFriend(id));
    yield put(routerActions.goBack({history: payload.history}));
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

export default function* () {
  yield all([
    takeEvery(types.FETCH_FRIENDS, fetchFriends),
    takeEvery(types.FETCH_FRIENDS_COMPLETE, fetchFriendsComplete),
    takeEvery(types.DELETE_FRIENDS, deleteFriends),
  ]);
}
