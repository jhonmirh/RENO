import { IsUUID, IsNumber, IsBoolean, Min, Max } from 'class-validator';

export class CreateEvaluacionDto {
  @IsUUID()
  idMomento: string; // MomentoPedagogico

  @IsUUID()
  idMateria: string; // Materia

  @IsNumber()
  @Min(1)
  numeroEvaluacion: number; // 1, 2, 3, ...

  @IsNumber()
  @Min(1)
  @Max(100)
  porcentaje: number; // Porcentaje de la evaluación

  @IsBoolean()
  acumulativo: boolean; // true si el docente definió acumulativo
}
