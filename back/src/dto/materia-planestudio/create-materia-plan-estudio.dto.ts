import {
  IsNotEmpty,
  IsUUID,
  IsInt,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export class CreateMateriaPlanEstudioDto {

  @IsNotEmpty()
  @IsUUID()
  idPlanEstudio: string;

  @IsNotEmpty()
  @IsUUID()
  idMateria: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(6)
  grado: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(40)
  horasSemanales?: number;
}
