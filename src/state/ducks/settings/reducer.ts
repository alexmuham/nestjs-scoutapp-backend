import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {failed, loading, success} from '../../entities/LoadableContainer';
import {PreferencesContainer} from '../../entities/PreferencesContainer';
import Preferences from '../../../entities/Preferences';

const fetchPreferencesCompleted: ReducerNextThrow<PreferencesContainer, Preferences> = {
  next: (state, {payload}) => ({...state, ...success({account: payload})}),
  // @ts-ignore
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<any>(
  {
    [types.FETCH_PREFERENCES]: (state) =>
      state.exists ? {exists: true, ...loading(state)} : {exists: false},
    [types.FETCH_PREFERENCES_COMPLETED]: fetchPreferencesCompleted,
  },
  {isBusy: false, isChecking: false, isLoading: false},
);
