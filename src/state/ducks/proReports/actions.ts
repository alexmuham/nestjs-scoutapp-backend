import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';
import ProReportsRequest from '../../../entities/proReportsRequest';

export type ProReportsPayload = {
  request: ProReportsRequest;
} & NavigationPayload;

export default {
  addProReports: createAction<ProReportsPayload>(types.ADD_PRO_REPORTS),
};
