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

type ReducerState = LoadableContainer<{player: Player}>;

const playersFetched: ReducerNextThrow<ReducerState, Player> = {
  next: (_, {payload}) => success({player: payload}),
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<ReducerState, any>(
  {
    [types.FETCH_PLAYER]: (state) => loading(state),
    [types.FETCH_PLAYER_COMPLETE]: playersFetched,
  },
  empty(),
);
