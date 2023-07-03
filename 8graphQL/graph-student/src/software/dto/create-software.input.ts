import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
@InputType()
export class CreateSoftwareInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  requerimientos: string;

  @Field(() => String)
  @IsNotEmpty()
  idioma: string;

  @Field(() => Boolean, { defaultValue: false })
  @IsOptional()
  eliminado: boolean;
}
