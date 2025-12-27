import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsEnum,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { CondicionEscolaridad } from '../../enums/condicion-escolaridad.enum';

export class CreateEscolaridadDto {

  @IsNotEmpty()
  @IsString()
  gradoActual: string;

  @IsNotEmpty()
  @IsString()
  seccionActual: string;

  @IsOptional()
  @IsString()
  mencion?: string;

  @IsNotEmpty()
  @IsDateString()
  fechaIngreso: Date;

  @IsOptional()
  @IsString()
  plantelOrigen?: string;

  @IsOptional()
  @IsString()
  estadoPlantelOrigen?: string;

  @IsOptional()
  @IsString()
  municipioPlantelOrigen?: string;

  @IsNotEmpty()
  @IsEnum(CondicionEscolaridad)
  condicion: CondicionEscolaridad;

  @IsNotEmpty()
  @IsUUID()
  idEstudiante: string;

  @IsNotEmpty()
  @IsUUID()
  idAnoEscolar: string;

  @IsNotEmpty()
  @IsUUID()
  idPlanEstudio: string;
}
