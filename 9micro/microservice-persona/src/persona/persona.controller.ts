import { PersonaService } from './persona.service';
import { PersonaDTO } from './dto/persona.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonaMsg } from 'src/common/constants';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @MessagePattern(PersonaMsg.CREATE)
  create(@Payload() personaDTO: PersonaDTO) {
    return this.personaService.create(personaDTO);
  }

  @MessagePattern(PersonaMsg.FIND_ALL)
  findAll() {
    return this.personaService.findAll();
  }

  @MessagePattern(PersonaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.personaService.findOne(id);
  }
  @MessagePattern(PersonaMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.personaService.update(payload.id, payload.personaDTO);
  }

  @MessagePattern(PersonaMsg.DELETE)
  delete(@Payload() id: string) {
    return this.personaService.delete(id);
  }
}
