import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import File from './File';

@Entity()
export default class User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    imageId: string,
    image: File,
    email: string,
    phoneNumber: string,
    allowNotifications: boolean,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageId = imageId;
    this.image = image;
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
  imageId: string;

  @ManyToOne(() => File, {nullable: false})
  image?: File;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  allowNotifications: boolean;

  @Column()
  education: string;
}
