import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import User from './User';
import {Platform} from 'entities/Platform';

@Entity()
export default class Session {
  constructor(
    id: string,
    token: string,
    refreshToken: string,
    user: User,
    userId: string,
    platform: Platform,
    firebaseRegistrationId: string,
  ) {
    this.id = id;
    this.token = token;
    this.refreshToken = refreshToken;
    this.user = user;
    this.userId = userId;
    this.platform = platform;
    this.firebaseRegistrationId = firebaseRegistrationId;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  token: string;

  @Column()
  refreshToken: string;

  @ManyToOne(() => User, {nullable: false})
  user: User;

  @Column()
  userId: string;

  @Column({type: 'enum', enum: Platform})
  platform: Platform;

  @Column({nullable: true})
  firebaseRegistrationId?: string;
}
