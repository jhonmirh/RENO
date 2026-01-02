import { IsUUID, IsNumber, Min, Max } from 'class-validator';

export class CreateNotaDto {
  @IsUUID()
  idEvaluacion: string; // Evaluación a la que corresponde

  @IsUUID()
  idEscolaridadMateria: string; // La materia inscrita por el estudiante

  @IsUUID()
  idDocente: string; // Para guardar quién registró la nota

  @IsNumber()
  @Min(1)
  @Max(2)
  numeroForma: number; // 1 o 2

  @IsNumber()
  @Min(0)
  @Max(20) // o 10 según el sistema educativo venezolano
  nota: number; // Nota registrada
}
