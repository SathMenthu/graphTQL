import { ObjectType, Field } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cars } from '../../cars/entities/cars.entity';

@Entity()
@ObjectType()
export class Owner extends BaseEntity {
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
