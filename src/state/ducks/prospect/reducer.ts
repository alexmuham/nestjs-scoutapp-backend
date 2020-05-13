import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import Player from 'entities/Player';
import {
  empty,
  failed,
  LoadableContainer,
  loading,
  success,
} from 'entities/LoadableContainer';

type ReducerState = LoadableContainer<{players: Player[]}>;

const playersFetched: ReducerNextThrow<ReducerState, Player[]> = {
  next: (_, {payload}) => success({players: payload}),
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<ReducerState[], any>(
  // @ts-ignore //TODO refactored
  {
    // @ts-ignore //TODO refactored
    [types.FETCH_PLAYERS]: (state) => loading(state),
    [types.FETCH_PLAYERS_COMPLETE]: playersFetched,
  },
  empty(),
);
