import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftwareDto } from './create-software.dto';
import {IsNotEmpty,IsNumber,IsString, isNotEmpty} from "class-validator";

export class UpdateSoftwareDto extends PartialType(CreateSoftwareDto) {
    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsString()
    requerimientos:string

    @IsNotEmpty()
    @IsString()
    idioma:string
}
