import {Action, handleActions} from 'redux-actions';
import types from './types';
import {GenReports} from 'state/entities';

type ReducerState = GenReports;

const addVideoCompleted = (
  state: ReducerState,
  {
    payload,
  }: Action<{
    fileUri: string;
    fileId: string;
  }>,
) => {
  const {fileId, fileUri} = payload;
  const {files} = state;
  let filesUris = [];
  let filesIds = [];
  if (!files) {
    filesUris.push(fileUri);
    filesIds.push(fileId);
  } else {
    filesUris = files.filesUris;
    filesUris.push(fileUri);
    filesIds = files.filesIds;
    filesIds.push(fileId);
  }
  return {
    ...state,
    files: {
      filesIds,
      filesUris,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.ADD_VIDEO_COMPLETED]: addVideoCompleted,
  },
  {date: undefined, files: undefined, notes: undefined},
);
