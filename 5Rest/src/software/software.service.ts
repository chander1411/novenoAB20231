import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateSoftwareDto } from './dto/create-software.dto';
import { UpdateSoftwareDto } from './dto/update-software.dto';
import { Software } from './entities/software.entity';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';

@Injectable()
export class SoftwareService {
  private softwares:Software[]=[
    {
      id:1,nombre:'Adobe Premier',requerimientos:'8GB RAM',idioma:'INGLES'
    },{
      id:2,nombre:'Postman',requerimientos:'8GB RAM',idioma:'ESPANOL'
    }
  ]
  create(createSoftwareDto: CreateSoftwareDto) {
    const software = new Software();
    software.id= Math.max( ... this.softwares.map(elemento => elemento.id),0 )+1 ;
    software.nombre = createSoftwareDto.nombre
    software.requerimientos = createSoftwareDto.requerimientos
    software.idioma = createSoftwareDto.idioma
    this.softwares.push(software)
    return software;
  }

  findAll(): Software[] {
    return this.softwares;
  }

  findOne(id: number) {
    const software = this.softwares.find(Software=>software.id===id);
    if(!software) throw new NotFoundException(`ID ${id} not found`)
    return software
  }

  update(id: number, updateSoftwareDto: UpdateSoftwareDto) {
    const{nombre,requerimientos,idioma}=updateSoftwareDto;
    const software = this.findOne(id)
    if(nombre) software.nombre = nombre;
    if(requerimientos) software.requerimientos = requerimientos;
    if(idioma) software.idioma = idioma;
    this.softwares = this.softwares.map(
      elemento => {
        if(elemento.id === id) return software;
        return elemento
      }
    )
    return software;
  }

  remove(id: number) {
    this.findOne(id);
    this.softwares = this.softwares.filter(elemento => elemento.id!== id);
    return `This action removes a #${id} software`;
  }
}
