import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car.entity';

@Resolver((of) => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  cars(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}
