import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {
  empty,
  failed,
  LoadableContainer,
  loading,
  success,
  Players,
} from 'state/entities';

type ReducerState = LoadableContainer<Players>;

const playersFetched: ReducerNextThrow<ReducerState, Players> = {
  next: (_, {payload}) => success({players: payload.players}),
  throw: (_, {payload}) => failed(payload),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.FETCH_USER_PLAYERS]: (state) => loading(state),
    [types.FETCH_PLAYERS_COMPLETE]: playersFetched,
  },
  empty(),
);
