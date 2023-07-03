import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISoftware } from 'src/common/interfaces/software.interface';
import { SOFTWARE } from 'src/common/models/models';
import { SoftwareDTO } from './dto/software.dto';

@Injectable()
export class SoftwareService {
  constructor(
    @InjectModel(SOFTWARE.name) private readonly model: Model<ISoftware>,
  ) {}

  async create(softwareDTO: SoftwareDTO): Promise<ISoftware> {
    const newSoftware = new this.model(softwareDTO);
    return await newSoftware.save();
  }

  async findAll(): Promise<ISoftware[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ISoftware> {
    return await this.model.findById(id);
  }

  async update(id: string, softwareDTO: SoftwareDTO): Promise<ISoftware> {
    return await this.model.findByIdAndUpdate(id, softwareDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
