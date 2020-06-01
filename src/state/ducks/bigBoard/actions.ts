import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';
import Players from '../../entities/Players';

export type FetchBigBoardPayload = {players: Players} & NavigationPayload;

export default {
  fetchBigBoard: createAction<NavigationPayload>(types.FETCH_BIG_BOARD),
  fetchBigBoardComplete: createAction<FetchBigBoardPayload>(
    types.FETCH_BIG_BOARD_COMPLETE,
  ),
};
