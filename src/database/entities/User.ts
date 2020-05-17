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
}
