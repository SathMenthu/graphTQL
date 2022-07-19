import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {
  @Field()
  mark: string;
  @Field()
  model: string;
  @Field((type) => Int)
  productionYear: number;
}
