import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSoftwareInput } from './dto/create-software.input';
import { UpdateSoftwareInput } from './dto/update-software.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Software } from './entities/software.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SoftwareService {
  constructor(
    @InjectRepository(Software)
    private readonly softwareRepository: Repository<Software>,
  ) {}
  async create(createSoftwareInput: CreateSoftwareInput): Promise<Software> {
    const newSoftware = this.softwareRepository.create(createSoftwareInput);
    return await this.softwareRepository.save(newSoftware);
  }

  findAll(): Promise<Software[]> {
    return this.softwareRepository.find({ where: { eliminado: false } });
  }

  findOne(id: string): Promise<Software> {
    const software = this.softwareRepository.findOneBy({ id });
    if (!software) throw new NotFoundException(`Not found`);
    return software;
  }

  async update(
    id: string,
    updateSoftwareInput: UpdateSoftwareInput,
  ): Promise<Software> {
    const software = await this.softwareRepository.preload(updateSoftwareInput);
    if (!software) throw new NotFoundException(`Not found`);
    return this.softwareRepository.save(software);
  }

  async remove(id: string): Promise<Software> {
    const software = await this.findOne(id);
    software.eliminado = true;
    this.softwareRepository.update({ id }, software);
    return software;
  }
}
