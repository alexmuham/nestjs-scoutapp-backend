import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {
  empty,
  failed,
  LoadableContainer,
  loading,
  success,
} from 'entities/LoadableContainer';
import Friends from 'entities/Friends';

type ReducerState = LoadableContainer<Friends>;

const friendsFetched: ReducerNextThrow<ReducerState, Friends> = {
  next: (_, {payload}) => success({friends: payload.friends}),
  throw: (_, {payload}) => failed(payload),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.FETCH_FRIENDS]: (state) => loading(state),
    [types.FETCH_FRIENDS_COMPLETE]: friendsFetched,
  },
  empty(),
);
