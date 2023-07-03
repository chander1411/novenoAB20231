import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PersonaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  identificacion: string;
}
