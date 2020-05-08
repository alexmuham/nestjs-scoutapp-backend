import {Platform} from 'entities/Platform';

export default interface Session {
  token: string;
  userId: string;
  platform: Platform;
}
