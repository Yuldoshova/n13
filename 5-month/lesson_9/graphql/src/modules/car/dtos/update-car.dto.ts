import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCarDto {

  @Field(() => Int)
  id: number

  @Field({ nullable: true })
  brand?: string;

  @Field(() => Int)
  price?: number;

  @Field()
  color?: string;

  @Field(() => Int)
  year?: number;
}
