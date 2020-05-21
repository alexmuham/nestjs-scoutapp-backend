import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export default class PGEventResults {
  constructor(
    id: string,
    fastballVelocity: string | undefined,
    tenYdSplit: string | undefined,
    infieldVelocity: string | undefined,
    exitVelocity: string | undefined,
    sixtyYdDash: string | undefined,
  ) {
    this.id = id;
    this.fastballVelocity = fastballVelocity;
    this.tenYdSplit = tenYdSplit;
    this.infieldVelocity = infieldVelocity;
    this.exitVelocity = exitVelocity;
    this.sixtyYdDash = sixtyYdDash;
  }

  @Field()
  id: string;

  @Field(() => String, {nullable: true})
  fastballVelocity: string | undefined;

  @Field(() => String, {nullable: true})
  tenYdSplit: string | undefined;

  @Field(() => String, {nullable: true})
  infieldVelocity: string | undefined;

  @Field(() => String, {nullable: true})
  exitVelocity: string | undefined;

  @Field(() => String, {nullable: true})
  sixtyYdDash: string | undefined;
}
