import {handleActions} from 'redux-actions';

export default handleActions<any>(
  {},
  {isBusy: false, isChecking: false, isLoading: false},
);
