import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
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
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.preferences = preferences;
    this.preferencesId = preferencesId;
    this.education = education;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

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
