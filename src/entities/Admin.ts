import {ID} from './Common';
import User from 'database/entities/User';

export default interface Admin {
  id: ID;
  user: User;
}
