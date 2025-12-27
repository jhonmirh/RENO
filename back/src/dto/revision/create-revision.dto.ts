import { IsNotEmpty, IsNumber, IsDateString, IsUUID, IsEnum, Min, Max } from 'class-validator';

export enum EstadoFinalRevision {
  APROBADO = 'Aprobado',
  REPROBADO = 'Reprobado',
}

export class CreateRevisionDto {

  @IsNotEmpty()
  @IsUUID()
  idDefinitiva: string;

  @IsNotEmpty()
  @IsNumber()
  numeroIntento: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(20)
  nota: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: Date;

  @IsNotEmpty()
  @IsEnum(EstadoFinalRevision)
  estadoFinal: EstadoFinalRevision;
}
