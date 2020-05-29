import {Action, handleActions} from 'redux-actions';
import types from './types';
import {GenReports} from 'state/entities';

type ReducerState = GenReports;

const addVideoCompleted = (
  state: ReducerState,
  {
    payload,
  }: Action<{
    filesUris: string[];
    filesIds: string[];
  }>,
) => {
  return {
    ...state,
    files: payload,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.ADD_VIDEO_COMPLETED]: addVideoCompleted,
  },
  {date: undefined, files: undefined, notes: undefined},
);
