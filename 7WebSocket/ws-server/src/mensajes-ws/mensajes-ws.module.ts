import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { EstudianteModule } from '../estudiante/estudiante.module';
import { SoftwareModule } from '../software/software.module';
//  'src/estudiante/estudiante.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports: [EstudianteModule, SoftwareModule],
})
export class MensajesWsModule {}
