import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type VideoPayload = {fileUri: string} & NavigationPayload;

export default {
  addVideoToGeneralReports: createAction<VideoPayload>(
    types.ADD_VIDEO_TO_GENERAL_REPORTS,
  ),
  addVideoCompleted: createAction(types.ADD_VIDEO_COMPLETED),
};
