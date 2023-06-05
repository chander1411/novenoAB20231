import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateSoftwareDto } from './dto/create-software.dto';
import { UpdateSoftwareDto } from './dto/update-software.dto';
import { Software } from './entities/software.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';

@Injectable()
export class SoftwareService {
  // private softwares:Software[]=[
  //   {
  //     id:1,nombre:'Adobe Premier',requerimientos:'8GB RAM',idioma:'INGLES'
  //   },{
  //     id:2,nombre:'Postman',requerimientos:'8GB RAM',idioma:'ESPANOL'
  //   }
  // ]
  private readonly logger = new Logger('SoftwareService');
  constructor(
    @InjectRepository(Software)
    private readonly softwareRepository: Repository<Software>,
  ) {}
  async create(createSoftwareDto: CreateSoftwareDto) {
    try {
      const software = this.softwareRepository.create(createSoftwareDto);
      await this.softwareRepository.save(software);
      return software;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
    // const software = new Software();
    // software.id =
    //   Math.max(...this.softwares.map((elemento) => elemento.id), 0) + 1;
    // software.nombre = createSoftwareDto.nombre;
    // software.requerimientos = createSoftwareDto.requerimientos;
    // software.idioma = createSoftwareDto.idioma;
    // this.softwares.push(software);
    // return software;
  }

  findAll() {
    return this.softwareRepository.find({});
    // return this.softwares;
  }

  findOne(nombre: string) {
    const software = this.softwareRepository.findOneBy({ nombre });
    if (!software) throw new NotFoundException(`Software ${nombre} not found`);
    return software;
    // const software = this.softwares.find((Software) => software.id === id);
    // if (!software) throw new NotFoundException(`ID ${id} not found`);
    // return software;
  }

  update(id: number, updateSoftwareDto: UpdateSoftwareDto) {
    // const { nombre, requerimientos, idioma } = updateSoftwareDto;
    // const software = this.findOne(id);
    // if (nombre) software.nombre = nombre;
    // if (requerimientos) software.requerimientos = requerimientos;
    // if (idioma) software.idioma = idioma;
    // this.softwares = this.softwares.map((elemento) => {
    //   if (elemento.id === id) return software;
    //   return elemento;
    // });
    // return software;
  }

  remove(id: number) {
    // this.findOne(id);
    // this.softwares = this.softwares.filter((elemento) => elemento.id !== id);
    // return `This action removes a #${id} software`;
  }
}
