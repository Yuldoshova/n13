import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCarDto {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  brand?: string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  color?: string;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => Int, { nullable: true })
  carTypeId?: number;
}
