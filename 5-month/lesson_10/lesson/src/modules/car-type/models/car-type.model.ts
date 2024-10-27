import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CarType {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}
