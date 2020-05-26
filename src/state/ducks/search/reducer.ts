import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {
  empty,
  failed,
  LoadableContainer,
  loading,
  success,
} from 'entities/LoadableContainer';
import Players from '../../entities/Players';

type ReducerState = LoadableContainer<Players>;

const playersFetched: ReducerNextThrow<ReducerState, Players> = {
  next: (_, {payload}) => success({players: payload.players}),
  throw: (_, {payload}) => failed(payload),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.SEARCH_PLAYERS]: (state) => loading(state),
    [types.SEARCH_PLAYERS_COMPLETED]: playersFetched,
  },
  empty(),
);
