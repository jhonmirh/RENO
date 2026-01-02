import { IsNotEmpty, IsString, IsInt, Min, Max, IsUUID } from 'class-validator';

export class CreatePlanEstudioDto {

  @IsNotEmpty() @IsString() nombre: string;
  @IsNotEmpty() @IsString() nivel: string;

  @IsNotEmpty() @IsInt() @Min(1) @Max(6) cantidadGrados: number;

  @IsNotEmpty() @IsUUID() idInstitucion: string; // Nueva relación con Institución
}
