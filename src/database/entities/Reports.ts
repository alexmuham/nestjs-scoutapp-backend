import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {GeneralReports, ProReports} from 'database/entities';

@Entity()
export default class Reports {
  constructor(id: string, generalReports: GeneralReports[], proReports: ProReports[]) {
    this.id = id;
    this.generalReports = generalReports;
    this.proReports = proReports;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => GeneralReports, {nullable: true})
  @JoinTable()
  generalReports: GeneralReports[];

  @ManyToMany(() => ProReports, {nullable: true})
  @JoinTable()
  proReports: ProReports[];
}
