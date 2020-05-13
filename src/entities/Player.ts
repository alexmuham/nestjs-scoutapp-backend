import {IsObject, IsString} from 'class-validator';

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
    statistics?: object,
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
    this.statistics = statistics;
  }

  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  externalId: string;

  @IsString()
  height: string;

  @IsString()
  weight: string;

  @IsString()
  bats: string;

  @IsString()
  throws: string;

  @IsString()
  graduatingClass: string;

  @IsString()
  primaryPosition: string;

  @IsString()
  highSchool: string;

  @IsString()
  contactPhone: string;

  @IsString()
  highSchoolContactPhone: string;

  @IsString()
  statePositionRanking: string;

  @IsString()
  stateOverallRanking: string;

  @IsString()
  nationalPositionRanking: string;

  @IsString()
  nationalOverallRanking: string;

  @IsString()
  collegeCommitment: string;

  @IsObject()
  statistics?: object;
}
