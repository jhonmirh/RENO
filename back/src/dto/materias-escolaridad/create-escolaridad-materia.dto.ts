import {
  IsNotEmpty,
  IsUUID,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateEscolaridadMateriaDto {

  @IsNotEmpty()
  @IsUUID()
  idEscolaridad: string;

  @IsNotEmpty()
  @IsUUID()
  idMateriaPlanEstudio: string;

  @IsOptional()
  @IsBoolean()
  esPendiente?: boolean;

  @IsOptional()
  @IsBoolean()
  esRepetida?: boolean;
}
