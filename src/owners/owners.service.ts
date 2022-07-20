import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  async create(createOwnerInput: CreateOwnerInput) {
    const newOwner = new Owner(createOwnerInput);
    await newOwner.save();
    return newOwner;
  }

  findAll() {
    return Owner.find();
  }

  findOne(id: string) {
    return Owner.findOneByOrFail({ id });
  }
}
