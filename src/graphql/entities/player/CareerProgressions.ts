import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class CareerProgressions {
  constructor(id: string) {
    this.id = id;
  }

  @Field()
  id: string;
}
