import {
  IsUUID,
  IsEnum,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { EstadoAcademico } from '../../enums/estado-academico.enum';

export class CreateEscolaridadDto {

  @IsOptional()
  @IsEnum(EstadoAcademico)
  estadoAcademico?: EstadoAcademico;

  @IsOptional()
  @IsNumber()
  materiasPendientes?: number;

  @IsOptional()
  @IsNumber()
  grado?: number;

  @IsOptional()
  @IsUUID()
  idPlanEstudio?: string;

  @IsOptional()
  @IsUUID()
  idInstitucion?: string;

  @IsOptional()
  @IsNumber()
  codigoDependencia?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
