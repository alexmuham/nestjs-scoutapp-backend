import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    allowNotifications: boolean,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.allowNotifications = allowNotifications;
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

  @Column()
  allowNotifications: boolean;

  @Column()
  education: string;
}
