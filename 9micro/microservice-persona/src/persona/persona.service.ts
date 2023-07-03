import { PersonaDTO } from './dto/persona.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PERSONA } from 'src/common/models/models';
import { IPersona } from 'src/common/interfaces/persona.interface';

@Injectable()
export class PersonaService {
  constructor(
    @InjectModel(PERSONA.name) private readonly model: Model<IPersona>,
  ) {}

  async create(PersonaDTO: PersonaDTO): Promise<IPersona> {
    const newPersona = new this.model(PersonaDTO);
    return await newPersona.save();
  }

  async findAll(): Promise<IPersona[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IPersona> {
    return await this.model.findById(id);
  }

  async update(id: string, PersonaDTO: PersonaDTO): Promise<IPersona> {
    return await this.model.findByIdAndUpdate(id, PersonaDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
