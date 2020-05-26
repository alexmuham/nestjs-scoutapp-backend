import {SessionContainer} from './Session';
import {Auth} from 'state/entities/Auth';
import {SnackBar} from 'state/entities/SnackBar';
import {LoadableContainer} from './LoadableContainer';
import Player from 'entities/Player';
import Preferences from 'entities/Preferences';
import Friends from './Friends';
import Players from './Players';

export default interface State {
  session: SessionContainer;
  auth: Auth;
  snackBar: SnackBar;
  prospect: LoadableContainer<Players>;
  player: LoadableContainer<Player>;
  preferences: LoadableContainer<Preferences>;
  friends: LoadableContainer<Friends>;
  search: LoadableContainer<Players>;
}
