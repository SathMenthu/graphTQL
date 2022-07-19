import { Injectable } from '@nestjs/common';
import { Cars } from './entities/cars.entity';
import { CreateCarInput } from './dto/create-car.input';

@Injectable()
export class CarsService {
  async createCar(createCarInput: CreateCarInput): Promise<Cars> {
    const car = new Cars(createCarInput);
    return await car.save();
  }

  async findAll(): Promise<Cars[]> {
    return await Cars.find();
  }
}
