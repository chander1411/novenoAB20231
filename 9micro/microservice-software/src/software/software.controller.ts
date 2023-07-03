import { SoftwareMSG } from '../common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Body, Controller } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { SoftwareDTO } from './dto/software.dto';

@Controller()
export class SoftwareController {
  constructor(private readonly softwareService: SoftwareService) {}

  @MessagePattern(SoftwareMSG.CREATE)
  create(@Body() softwareDTO: SoftwareDTO) {
    return this.softwareService.create(softwareDTO);
  }

  @MessagePattern(SoftwareMSG.FIND_ALL)
  findAll() {
    return this.softwareService.findAll();
  }

  @MessagePattern(SoftwareMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.softwareService.findOne(id);
  }

  @MessagePattern(SoftwareMSG.UPDATE)
  update(@Payload() payload) {
    return this.softwareService.update(payload.id, payload.softwareDTO);
  }

  @MessagePattern(SoftwareMSG.DELETE)
  delete(@Payload() id: string) {
    return this.softwareService.delete(id);
  }
}
