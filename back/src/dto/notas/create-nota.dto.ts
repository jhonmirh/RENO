import {isNotEmpty, IsString, IsUUID, IsNumber, Min, Max, isString } from 'class-validator';

export class CreateNotaDto {
  @IsUUID()
  idEvaluacion: string;  // Evaluación que corresponde

  @IsUUID()
  idEscolaridadMateria: string;  // Materia que corresponde al estudiante

  @IsUUID()
  idDocente: string;  // Docente que registra la nota

  @IsNumber()
  @Min(1)
  @Max(2)
  numeroForma: number;  // 1 o 2 para las formas de evaluación (1ra forma, 2da forma)

  @IsNumber()
  @Min(0)
  @Max(20)  // Cambia el límite si tu sistema tiene una escala diferente
  nota: number;  // Nota final de la evaluación

  @IsNumber()
  @Min(0)
  @Max(20)  // Cambia el límite si tu sistema tiene una escala diferente
  notaConsejo: number;  // Nota final de la evaluación


  @IsString() observaciones: string;  // Observaciones adicionales sobre la nota
}
