import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {GeneralReports} from 'database/entities';

@Entity()
export default class Reports {
  constructor(id: string, generalReports: GeneralReports[]) {
    this.id = id;
    this.generalReports = generalReports;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => GeneralReports, {nullable: true})
  @JoinTable()
  generalReports: GeneralReports[];
}
