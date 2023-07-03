import { Module } from '@nestjs/common';
import { SOFTWARE } from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { SoftwareController } from './software.controller';
import { SoftwareService } from './software.service';
import { SoftwareSchema } from './schema/software.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: SOFTWARE.name,
        useFactory: () => SoftwareSchema,
      },
    ]),
  ],
  controllers: [SoftwareController],
  providers: [SoftwareService],
})
export class SoftwareModule {}
