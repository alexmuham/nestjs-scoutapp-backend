import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class Ranking {
  constructor(id: string, top: string, percentile: string, average: string) {
    this.id = id;
    this.top = top;
    this.percentile = percentile;
    this.average = average;
  }

  @Field()
  id: string;

  @Field(() => String)
  top: string;

  @Field(() => String)
  percentile: string;

  @Field(() => String)
  average: string;
}
