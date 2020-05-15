import Preferences from 'entities/Preferences';
import {LoadableContainer} from 'entities/LoadableContainer';

export interface PreferencesContainer {
  preferences: LoadableContainer<Preferences>;
}
