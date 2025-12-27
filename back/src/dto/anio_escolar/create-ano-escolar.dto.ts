import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateAnoEscolarDto {

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-\d{4}$/, {
    message: 'El año escolar debe tener el formato YYYY-YYYY (ej: 2025-2026)',
  })
  @MaxLength(9)
  nombreAno: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  observaciones?: string;

  @IsNotEmpty()
  @IsUUID()
  idPlanEstudio: string;
}
