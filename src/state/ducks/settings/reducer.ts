import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {failed, loading, success} from '../../entities/LoadableContainer';
import Preferences from '../../../entities/Preferences';
import {empty, LoadableContainer} from '../../../entities/LoadableContainer';

type ReducerState = LoadableContainer<Preferences>;

const preferencesFetched: ReducerNextThrow<ReducerState, Preferences> = {
  next: (_, {payload}) => success(payload),
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<ReducerState, any>(
  {
    [types.FETCH_PREFERENCES]: (state) => loading(state),
    [types.FETCH_PREFERENCES_COMPLETED]: preferencesFetched,
  },
  empty(),
);
