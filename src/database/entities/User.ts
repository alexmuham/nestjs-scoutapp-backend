import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import Player from './Player';
import Preferences from './Preferences';
import File from './File';

@Entity()
export default class User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    preferences: Preferences,
    preferencesId: string,
    education: string,
    players: Player[],
    friends: User[],
    image: File,
    imageId: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.preferences = preferences;
    this.preferencesId = preferencesId;
    this.education = education;
    this.players = players;
    this.friends = friends;
    this.image = image;
    this.imageId = imageId;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Player, {nullable: false})
  @JoinTable()
  players: Player[];

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @ManyToOne(() => Preferences, {nullable: false})
  preferences: Preferences;

  @Column({nullable: false})
  preferencesId: string;

  @Column()
  education: string;

  @ManyToMany(() => User, {nullable: false})
  @JoinTable()
  friends: User[];

  @Column({nullable: true})
  imageId?: string;

  @ManyToOne(() => File, {nullable: true})
  image?: File;
}
