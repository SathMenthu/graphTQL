import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Cars } from './entities/cars.entity';
import { CreateCarInput } from './dto/create-car.input';
import { Owner } from '../owners/entities/owner.entity';

@Resolver((of) => Cars)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Cars])
  cars(): Promise<Cars[]> {
    return this.carsService.findAll();
  }

  @Mutation((returns) => Cars)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarInput,
  ): Promise<Cars> {
    return this.carsService.createCar(createCarInput);
  }

  @Query((returns) => Cars)
  getCar(@Args('id', { type: () => String }) id: string): Promise<Cars> {
    return this.carsService.findOne(id);
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() car: Cars): Promise<Owner> {
    return this.carsService.getOwner(car.ownerId);
  }
}
