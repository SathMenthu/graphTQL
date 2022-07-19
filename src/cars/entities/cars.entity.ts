import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCarInput } from '../dto/create-car.input';

@Entity()
@ObjectType()
export class Cars extends BaseEntity {
  constructor(createCarInput?: CreateCarInput) {
    super();
    if (createCarInput) {
      this.mark = createCarInput.mark;
      this.model = createCarInput.model;
      this.productionYear = createCarInput.productionYear;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  mark: string;

  @Column()
  @Field()
  model: string;

  @Column()
  @Field((type) => Int)
  productionYear: number;
}
