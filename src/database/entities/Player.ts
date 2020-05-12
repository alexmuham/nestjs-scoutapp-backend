import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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
    // statistics: object,
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
    // this.statistics = statistics;
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

  // @Column()
  // statistics: object;
}
