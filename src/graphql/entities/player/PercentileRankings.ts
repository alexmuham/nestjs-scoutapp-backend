import {ObjectType, Field} from '@nestjs/graphql';
import Ranking from './Ranking';

@ObjectType()
export default class PercentileRankings {
  constructor(
    id: string,
    FB: Ranking | undefined,
    C: Ranking | undefined,
    oneB: Ranking | undefined,
    tenSPL: Ranking | undefined,
    sixty: Ranking | undefined,
    IF: Ranking | undefined,
    pop: Ranking | undefined,
  ) {
    this.id = id;
    this.FB = FB;
    this.C = C;
    this.oneB = oneB;
    this.tenSPL = tenSPL;
    this.sixty = sixty;
    this.IF = IF;
    this.pop = pop;
  }

  @Field()
  id: string;

  @Field(() => Ranking, {nullable: true})
  FB?: Ranking | undefined;

  @Field(() => Ranking, {nullable: true})
  C?: Ranking | undefined;

  @Field(() => Ranking, {nullable: true})
  oneB?: Ranking | undefined;

  @Field(() => Ranking, {nullable: true})
  tenSPL?: Ranking | undefined;

  @Field(() => Ranking, {nullable: true})
  sixty?: Ranking | undefined;

  @Field(() => Ranking, {nullable: true})
  IF?: Ranking | undefined;

  @Field(() => Ranking, {nullable: true})
  pop?: Ranking | undefined;
}
