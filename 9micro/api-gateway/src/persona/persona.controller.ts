import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PersonaMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { PersonaDTO } from './dto/persona.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IPersona } from 'src/common/interfaces/persona.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('personas')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/persona')
export class PersonaController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyUser = this.clientProxy.clientProxyPersonas();

  @Post()
  create(@Body() personaDTO: PersonaDTO): Observable<IPersona> {
    return this._clientProxyUser.send(PersonaMSG.CREATE, personaDTO);
  }

  @Get()
  findAll(): Observable<IPersona[]> {
    return this._clientProxyUser.send(PersonaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPersona> {
    return this._clientProxyUser.send(PersonaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDTO: PersonaDTO,
  ): Observable<IPersona> {
    return this._clientProxyUser.send(PersonaMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(PersonaMSG.DELETE, id);
  }
}
