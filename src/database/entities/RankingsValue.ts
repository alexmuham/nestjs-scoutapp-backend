import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class RankingsValue {
  constructor(id: string, top: string, percentile: string, average: string) {
    this.id = id;
    this.top = top;
    this.percentile = percentile;
    this.average = average;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {nullable: true})
  top: string;

  @Column('text', {nullable: true})
  percentile: string;

  @Column('text', {nullable: true})
  average: string;
}
