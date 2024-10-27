import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { CarTypeService } from './car-type.service';
import { CreateCarTypeDto, UpdateCarTypeDto } from './dtos';
import { PubSub } from 'graphql-subscriptions';

@Resolver('CarType')
export class CarTypeResolver {
  private pubSub: PubSub

  constructor(private readonly carTypeService: CarTypeService) {
    this.pubSub = new PubSub()
  }

  @Mutation('createCarType')
  async create(@Args('createCarTypeInput') createCarTypeInput: CreateCarTypeDto) {
    const newCarType = await this.carTypeService.create(createCarTypeInput);
    await this.pubSub.publish('forCarTypeAdded', { carTypeAdded: newCarType })
    return newCarType
  }

  @Query('carTypes')
  findAll() {
    return this.carTypeService.findAll();
  }

  @Query('carType')
  findOne(@Args('id') id: number) {
    return this.carTypeService.findOne(id);
  }

  @Mutation('updateCarType')
  async update(@Args('updateCarTypeInput') updateCarTypeInput: UpdateCarTypeDto) {
    const updateCarType = await this.carTypeService.update(updateCarTypeInput);
    await this.pubSub.publish('forCarTypeUpdated', { carTypeUpdated: updateCarType })
    return updateCarType
  }

  @Mutation('removeCarType')
  remove(@Args('id') id: number) {
    return this.carTypeService.remove(id);
  }

  @Subscription('carTypeAdded')
  carTypeAdd() {
    return this.pubSub.asyncIterator('forCarTypeAdded')
  }

  @Subscription('carTypeUpdated')
  carTypeUpdate() {
    return this.pubSub.asyncIterator('forCarTypeUpdated')
  }
}
