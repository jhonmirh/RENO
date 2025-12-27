import {
  IsNotEmpty,
  IsUUID,
  IsNumber,
  Min,
  Max,
  IsEnum,
} from 'class-validator';
import { TipoEvaluacion } from '../../enums/tipo-evaluacion.enum';
import { EstadoAcademico } from '../../enums/estado-academico.enum';

export class CreateDefinitivaDto {

  @IsNotEmpty()
  @IsUUID()
  idEscolaridadMateria: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(20)
  notaFinal: number;

  @IsNotEmpty()
  @IsEnum(TipoEvaluacion)
  tipoEvaluacion: TipoEvaluacion;

  @IsNotEmpty()
  @IsEnum(EstadoAcademico)
  estadoAcademico: EstadoAcademico;
}
