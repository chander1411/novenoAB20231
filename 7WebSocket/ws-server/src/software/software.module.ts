import { Module } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { SoftwareController } from './software.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Software } from './entities/software.entity';
@Module({
  controllers: [SoftwareController],
  providers: [SoftwareService],
  imports: [TypeOrmModule.forFeature([Software])],
  exports: [SoftwareService, TypeOrmModule],
})
export class SoftwareModule {}
