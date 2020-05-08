import {SessionContainer} from './Session';
import {Auth} from 'state/entities/Auth';
import {SnackBar} from 'state/entities/SnackBar';

export default interface State {
  session: SessionContainer;
  auth: Auth;
  snackBar: SnackBar;
}
