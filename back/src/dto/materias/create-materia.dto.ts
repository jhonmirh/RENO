import {
  IsNotEmpty,
  IsString,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateMateriaDto {

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nombre: string; // Matemática, Castellano, Biología

  @IsOptional()
  @IsString()
  @MaxLength(255)
  descripcion?: string;
}
