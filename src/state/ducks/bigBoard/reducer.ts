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

const fetchBigBoardComplete: ReducerNextThrow<ReducerState, Players> = {
  next: (_, {payload}) => success({players: payload.players}),
  throw: (_, {payload}) => failed(payload),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.FETCH_BIG_BOARD]: (state) => loading(state),
    [types.FETCH_BIG_BOARD_COMPLETE]: fetchBigBoardComplete,
  },
  empty(),
);
