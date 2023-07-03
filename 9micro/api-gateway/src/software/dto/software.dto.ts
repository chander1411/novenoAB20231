import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class SoftwareDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  requerimientos: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  idioma: string;
}
