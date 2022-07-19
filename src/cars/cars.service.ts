import { Injectable } from '@nestjs/common';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  async findAll(): Promise<Car[]> {
    const cars = [];
    const car = new Car();
    car.id = '1';
    car.mark = 'Honda';
    car.model = 'Civic X';
    car.productionYear = 2019;
    cars.push(car);

    return cars;
  }
}
