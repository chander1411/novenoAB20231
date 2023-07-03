import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SoftwareService } from './software.service';
import { Software } from './entities/software.entity';
import { CreateSoftwareInput } from './dto/create-software.input';
import { UpdateSoftwareInput } from './dto/update-software.input';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Software)
export class SoftwareResolver {
  constructor(private readonly softwareService: SoftwareService) {}

  @Mutation(() => Software)
  createSoftware(
    @Args('createSoftwareInput') createSoftwareInput: CreateSoftwareInput,
  ) {
    return this.softwareService.create(createSoftwareInput);
  }

  @Query(() => [Software], { name: 'softwares' })
  findAll() {
    return this.softwareService.findAll();
  }

  @Query(() => Software, { name: 'software' })
  findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string) {
    return this.softwareService.findOne(id);
  }

  @Mutation(() => Software)
  updateSoftware(
    @Args('updateSoftwareInput') updateSoftwareInput: UpdateSoftwareInput,
  ) {
    return this.softwareService.update(
      updateSoftwareInput.id,
      updateSoftwareInput,
    );
  }

  @Mutation(() => Software)
  removeSoftware(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string) {
    return this.softwareService.remove(id);
  }
}
