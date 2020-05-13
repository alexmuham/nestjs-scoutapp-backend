import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
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
  }

  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  externalId: string;

  @Field(() => String)
  height: string;

  @Field(() => String)
  weight: string;

  @Field(() => String)
  bats: string;

  @Field(() => String)
  throws: string;

  @Field(() => String)
  graduatingClass: string;

  @Field(() => String)
  primaryPosition: string;

  @Field(() => String)
  highSchool: string;

  @Field(() => String)
  contactPhone: string;

  @Field(() => String)
  highSchoolContactPhone: string;

  @Field(() => String)
  statePositionRanking: string;

  @Field(() => String)
  stateOverallRanking: string;

  @Field(() => String)
  nationalPositionRanking: string;

  @Field(() => String)
  nationalOverallRanking: string;

  @Field(() => String)
  collegeCommitment: string;
}
