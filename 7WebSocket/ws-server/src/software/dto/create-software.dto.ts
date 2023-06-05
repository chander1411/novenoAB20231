import {IsNotEmpty,IsNumber,IsString, isNotEmpty} from "class-validator";
export class CreateSoftwareDto {
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
