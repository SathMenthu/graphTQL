import { Injectable } from '@nestjs/common';
import { Cars } from './entities/cars.entity';
import { CreateCarInput } from './dto/create-car.input';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Injectable()
export class CarsService {
  constructor(private ownerService: OwnersService) {}

  async createCar(createCarInput: CreateCarInput): Promise<Cars> {
    const car = new Cars(createCarInput);
    return await car.save();
  }

  async findAll(): Promise<Cars[]> {
    return await Cars.find();
  }

  async findOne(id: string): Promise<Cars> {
    return await Cars.findOneByOrFail({ id });
  }

  getOwner(ownerId: string): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }
}
