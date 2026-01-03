import { IsUUID, IsNumber, Min, Max } from 'class-validator';

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
}
