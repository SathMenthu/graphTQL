import { ObjectType, Field } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cars } from '../../cars/entities/cars.entity';
import { CreateOwnerInput } from '../dto/create-owner.input';

@Entity()
@ObjectType()
export class Owner extends BaseEntity {
  constructor(createOwnerInput?: CreateOwnerInput) {
    super();
    if (createOwnerInput) this.name = createOwnerInput.name;
  }

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Cars, (car) => car.owner)
  @Field((type) => [Cars, { nullable: true }])
  cars: Cars[];
}
