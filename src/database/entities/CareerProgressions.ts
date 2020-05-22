import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class CareerProgressions {
  constructor(id: string, progress: string) {
    this.id = id;
    this.progress = progress;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  progress: string;
}
