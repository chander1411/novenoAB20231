import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { SoftwareModule } from './software/software.module';

@Module({
  imports: [EstudianteModule, SoftwareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
