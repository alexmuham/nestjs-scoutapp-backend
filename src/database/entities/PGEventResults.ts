import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class PGEventResults {
  constructor(
    id: string,
    fastballVelocity: string,
    tenYdSplit: string,
    infieldVelocity: string,
    exitVelocity: string,
    sixtyYdDash: string,
  ) {
    this.id = id;
    this.fastballVelocity = fastballVelocity;
    this.tenYdSplit = tenYdSplit;
    this.infieldVelocity = infieldVelocity;
    this.exitVelocity = exitVelocity;
    this.sixtyYdDash = sixtyYdDash;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {nullable: true})
  fastballVelocity: string;

  @Column('text', {nullable: true})
  tenYdSplit: string;

  @Column('text', {nullable: true})
  infieldVelocity: string;

  @Column('text', {nullable: true})
  exitVelocity: string;

  @Column('text', {nullable: true})
  sixtyYdDash: string;
}
