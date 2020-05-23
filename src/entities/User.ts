import {ID} from './Common';
import Player from './Player';
import {IsString} from 'class-validator';

export default class User {
  constructor(
    id: string,
    email: string,
    preferencesId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
    players: Player[],
    image: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.preferencesId = preferencesId;
    this.phoneNumber = phoneNumber;
    this.education = education;
    this.players = players;
    this.image = image;
  }

  id: ID;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  players?: Player[];

  @IsString()
  email: string;

  @IsString()
  preferencesId: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  education: string;

  @IsString()
  image: string | undefined;
}
