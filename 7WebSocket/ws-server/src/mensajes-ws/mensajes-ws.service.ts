import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Estudiante } from '../estudiante/entities/estudiante.entity';
import { Software } from '../software/entities/software.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteService } from 'src/estudiante/estudiante.service';
import { SoftwareService } from 'src/software/software.service';

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    software: Software;
  };
}

@Injectable()
export class MensajesWsService {
  private connectedClients: ConnectedClients = {};

  constructor(
    @InjectRepository(Software)
    private readonly softwareRepository: Repository<Software>, // private readonly estudianteRepository: Repository<Estudiante>, // private readonly estudianteService: EstudianteService,
  ) {}

  async registerClient(client: Socket, name: string) {
    const software = await this.softwareRepository.findOneBy({
      nombre: name,
    });
    if (!software) throw new Error('Software no encontrado');

    this.connectedClients[client.id] = {
      socket: client,
      software: software,
    };
  }
  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }
  getConnectedClients(): string[] {
    // return Object.keys(this.connectedClients).length;
    // console.log(this.connectedClients)
    return Object.keys(this.connectedClients);
  }
  getStudentFullName(id: string) {
    return this.connectedClients[id].software.nombre;
  }
}
