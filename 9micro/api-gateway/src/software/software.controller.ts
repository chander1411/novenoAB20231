import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SoftwareMSG } from '../common/constants';
import { SoftwareDTO } from './dto/software.dto';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { ISoftware } from 'src/common/interfaces/software.interface';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@ApiTags('passengers')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/software')
export class SoftwareController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyPassenger = this.clientProxy.clientProxySoftwares();

  @Post()
  create(@Body() softwareDTO: SoftwareDTO): Observable<ISoftware> {
    return this._clientProxyPassenger.send(SoftwareMSG.CREATE, softwareDTO);
  }

  @Get()
  findAll(): Observable<ISoftware[]> {
    return this._clientProxyPassenger.send(SoftwareMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ISoftware> {
    return this._clientProxyPassenger.send(SoftwareMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() softwareDTO: SoftwareDTO,
  ): Observable<ISoftware> {
    return this._clientProxyPassenger.send(SoftwareMSG.UPDATE, {
      id,
      softwareDTO: softwareDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPassenger.send(SoftwareMSG.DELETE, id);
  }
}
