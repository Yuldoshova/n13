import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarDto {
  @Field({nullable: true})
  brand: string;

  @Field(() => Int)
  price: number;

  @Field()
  color: string;

  @Field(() => Int)
  year: number;

  @Field(() => Int)
  carTypeId: number;
}
