import {
  Entity,
  // Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class CareerProgressions {
  constructor(
    id: string,
    // careerProgressionsObject: object
  ) {
    this.id = id;
    // this.careerProgressionsObject = careerProgressionsObject;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column({nullable: true})
  // careerProgressionsObject?: object;
}
