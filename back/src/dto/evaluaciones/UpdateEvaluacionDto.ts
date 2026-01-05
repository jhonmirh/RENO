import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEvaluacionDto {

  @ApiProperty({ description: 'Número de la evaluación', required: false })
  @IsOptional()
  @IsNumber()
  numeroEvaluacion?: number;  // Cambiar el número de la evaluación

  @ApiProperty({ description: 'Porcentaje de la evaluación', required: false })
  @IsOptional()
  @IsNumber()
  porcentaje?: number;  // Modificar el porcentaje

  @ApiProperty({ description: 'Indica si la evaluación es acumulativa', required: false })
  @IsOptional()
  acumulativo?: boolean;

  @ApiProperty({ description: 'Nota de la primera forma', required: false })
  @IsOptional()
  @IsNumber()
  notaUno?: number;  // Cambiar la nota de la primera forma

  @ApiProperty({ description: 'Nota de la segunda forma', required: false })
  @IsOptional()
  @IsNumber()
  notaDos?: number;  // Cambiar la nota de la segunda forma
}
