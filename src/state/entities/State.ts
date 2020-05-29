import {
  Auth,
  SnackBar,
  LoadableContainer,
  Players,
  Friends,
  SessionContainer,
  GenReports,
} from 'state/entities';
import Player from 'entities/Player';
import Preferences from 'entities/Preferences';

export default interface State {
  session: SessionContainer;
  auth: Auth;
  snackBar: SnackBar;
  prospect: LoadableContainer<Players>;
  player: LoadableContainer<Player>;
  preferences: LoadableContainer<Preferences>;
  friends: LoadableContainer<Friends>;
  search: LoadableContainer<Players>;
  genReports: GenReports;
}
