import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {
  failed,
  loading,
  success,
  empty,
  LoadableContainer,
} from 'entities/LoadableContainer';
import Preferences from 'entities/Preferences';

type ReducerState = LoadableContainer<Preferences>;

const preferencesFetched: ReducerNextThrow<ReducerState, Preferences> = {
  next: (_, {payload}) => success(payload),
  throw: (_, {payload}) => failed(payload),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.FETCH_PREFERENCES]: (state) => loading(state),
    [types.FETCH_PREFERENCES_COMPLETED]: preferencesFetched,
  },
  empty(),
);
