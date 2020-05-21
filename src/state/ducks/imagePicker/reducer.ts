import {handleActions} from 'redux-actions';
import types from './types';

type ReducerState = {imageUrl: string};

// TODO FIX
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.ADD_IMAGE_URL]: (state, {payload}) => ({...state, imageUrl: payload}),
  },
  {imageUrl: ''},
);
