import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class CareerProgressions {
  constructor(id: string, progress: string) {
    this.id = id;
    this.progress = progress;
  }

  @Field()
  id: string;

  @Field()
  progress: string;
}
