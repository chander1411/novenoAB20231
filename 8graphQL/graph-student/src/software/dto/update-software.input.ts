import { IsUUID } from 'class-validator';
import { CreateSoftwareInput } from './create-software.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
@InputType()
export class UpdateSoftwareInput extends PartialType(CreateSoftwareInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  requerimientos: string;

  @Field(() => String)
  @IsNotEmpty()
  idioma: string;
}
