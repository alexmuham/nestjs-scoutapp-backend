import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  PercentileRankings,
  CareerProgressions,
  PGEventResults,
  File,
  Reports,
} from 'database/entities';

@Entity()
export default class Player {
  constructor(
    id: string,
    name: string,
    externalId: string,
    height: string,
    weight: string,
    bats: string,
    throws: string,
    graduatingClass: string,
    primaryPosition: string,
    highSchool: string,
    contactPhone: string,
    highSchoolContactPhone: string,
    statePositionRanking: string,
    stateOverallRanking: string,
    nationalPositionRanking: string,
    nationalOverallRanking: string,
    collegeCommitment: string,
    careerProgressions: CareerProgressions,
    careerProgressionsId: string,
    percentileRankings: PercentileRankings,
    percentileRankingsId: string,
    pGEventResults: PGEventResults,
    pGEventResultsId: string,
    images: File[],
    reports: Reports,
    reportsId: string,
  ) {
    this.id = id;
    this.name = name;
    this.externalId = externalId;
    this.height = height;
    this.weight = weight;
    this.bats = bats;
    this.throws = throws;
    this.graduatingClass = graduatingClass;
    this.primaryPosition = primaryPosition;
    this.highSchool = highSchool;
    this.contactPhone = contactPhone;
    this.highSchoolContactPhone = highSchoolContactPhone;
    this.statePositionRanking = statePositionRanking;
    this.stateOverallRanking = stateOverallRanking;
    this.nationalPositionRanking = nationalPositionRanking;
    this.nationalOverallRanking = nationalOverallRanking;
    this.collegeCommitment = collegeCommitment;
    this.careerProgressions = careerProgressions;
    this.careerProgressionsId = careerProgressionsId;
    this.percentileRankings = percentileRankings;
    this.percentileRankingsId = percentileRankingsId;
    this.pGEventResults = pGEventResults;
    this.pGEventResultsId = pGEventResultsId;
    this.images = images;
    this.reports = reports;
    this.reportsId = reportsId;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  externalId: string;

  @Column()
  height: string;

  @Column()
  weight: string;

  @Column()
  bats: string;

  @Column()
  throws: string;

  @Column()
  graduatingClass: string;

  @Column()
  primaryPosition: string;

  @Column()
  highSchool: string;

  @Column()
  contactPhone: string;

  @Column()
  highSchoolContactPhone: string;

  @Column()
  statePositionRanking: string;

  @Column()
  stateOverallRanking: string;

  @Column()
  nationalPositionRanking: string;

  @Column()
  nationalOverallRanking: string;

  @Column()
  collegeCommitment: string;

  @ManyToOne(() => CareerProgressions, {nullable: true})
  @JoinColumn()
  careerProgressions?: CareerProgressions;

  @Column({nullable: true})
  careerProgressionsId: string;

  @ManyToOne(() => PercentileRankings, {nullable: true})
  @JoinColumn()
  percentileRankings?: PercentileRankings;

  @Column({nullable: true})
  percentileRankingsId: string;

  @ManyToOne(() => PGEventResults, {nullable: true})
  @JoinColumn()
  pGEventResults?: PGEventResults;

  @Column({nullable: true})
  pGEventResultsId: string;

  @ManyToMany(() => File, {nullable: false})
  @JoinTable()
  images: File[];

  @ManyToOne(() => Reports, {nullable: false})
  @JoinTable()
  reports: Reports;

  @Column({nullable: true})
  reportsId: string;
}
