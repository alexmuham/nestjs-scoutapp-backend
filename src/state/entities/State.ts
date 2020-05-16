import {SessionContainer} from './Session';
import {Auth} from 'state/entities/Auth';
import {SnackBar} from 'state/entities/SnackBar';
import {LoadableContainer} from './LoadableContainer';
import Player from 'entities/Player';

export default interface State {
  session: SessionContainer;
  auth: Auth;
  snackBar: SnackBar;
  prospect: LoadableContainer<{players: Player[]}>;
  player: LoadableContainer<Player>;
}
