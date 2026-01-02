import { IsNotEmpty, IsString, IsUUID, IsOptional, IsInt } from 'class-validator';

export class CreateAnoEscolarDto {

  @IsNotEmpty() @IsString() nombreAno: string; 
  @IsOptional() @IsString() observaciones?: string;
  
  @IsNotEmpty() @IsUUID() idInstitucion: string; // Nueva relación con Institución
  @IsNotEmpty() @IsUUID() codigoDependencia: string; // Nueva relación con Dependencia
  
  @IsNotEmpty() @IsUUID() idPlanEstudio: string;
}
