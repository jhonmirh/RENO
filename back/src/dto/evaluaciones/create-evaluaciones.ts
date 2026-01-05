import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEvaluacionDto {

  @ApiProperty({ description: 'ID del momento pedagógico' })
  @IsNotEmpty()
  idMomento: string;

  @ApiProperty({ description: 'ID de la materia' })
  @IsNotEmpty()
  idMateria: string;

  @ApiProperty({ description: 'ID del año escolar' })
  @IsNotEmpty()
  idAnoEscolar: string;  // Relación con el Año Escolar

  @ApiProperty({ description: 'Número de la evaluación' })
  @IsNotEmpty()
  @IsNumber()
  numeroEvaluacion: number;  // Ejemplo: 1, 2, 3, etc.

  @ApiProperty({ description: 'Porcentaje de la evaluación' })
  @IsNotEmpty()
  @IsNumber()
  porcentaje: number;

  @ApiProperty({ description: 'Indica si la evaluación es acumulativa', default: false })
  @IsOptional()
  acumulativo?: boolean;

  @ApiProperty({ description: 'Nota de la primera forma', required: false })
  @IsOptional()
  @IsNumber()
  notaUno?: number;  // Nota de la primera forma de la evaluación

  @ApiProperty({ description: 'Nota de la segunda forma', required: false })
  @IsOptional()
  @IsNumber()
  notaDos?: number;  // Nota de la segunda forma de la evaluación (opcional)
}
