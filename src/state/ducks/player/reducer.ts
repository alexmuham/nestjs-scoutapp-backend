import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import Player from 'entities/Player';
import {
  failed,
  LoadableContainer,
  loading,
  success,
  empty,
} from 'entities/LoadableContainer';

type ReducerState = LoadableContainer<Player>;

const playersFetched: ReducerNextThrow<ReducerState, Player> = {
  next: (_, {payload}) => success(payload),
  throw: (_, {payload}) => failed(payload),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.FETCH_PLAYER]: (state) => loading(state),
    [types.FETCH_PLAYER_COMPLETE]: playersFetched,
  },
  empty(),
);
