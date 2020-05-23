import Player from './Player';

export default interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  education: string;
  phoneNumber: string;
  image?: string;
  players?: Player[];
}
