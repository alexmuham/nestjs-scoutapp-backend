import * as Items from './assets';
import {History} from 'history';

export default {
  Friends: (history: History) => ({
    image: Items.Friends,
    onPress: () => history.push('/main/friends'),
  }),
  Settings: (history: History) => ({
    image: Items.Settings,
    onPress: () => history.push('/main/settings'),
  }),
};
