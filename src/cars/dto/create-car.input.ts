import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCarInput {
  @IsAlpha()
  @Field()
  mark: string;

  @IsNotEmpty()
  @Field()
  model: string;

  @IsInt()
  @Field((type) => Int)
  productionYear: number;

  @Field((type) => String)
  ownerId: string;
}
