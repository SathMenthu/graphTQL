import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Cars } from './entities/cars.entity';
import { CreateCarInput } from './dto/create-car.input';

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
}
