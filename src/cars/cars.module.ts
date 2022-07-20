import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { OwnersModule } from '../owners/owners.module';

@Module({
  providers: [CarsService, CarsResolver],
  imports: [OwnersModule],
})
export class CarsModule {}
