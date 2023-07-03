import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaSchema } from './schema/persona.schema';
import { PERSONA } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaController } from './persona.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PERSONA.name,
        useFactory: () => PersonaSchema,
      },
    ]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
