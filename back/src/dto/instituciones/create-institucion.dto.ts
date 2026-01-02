import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateInstitucionDto {

  @IsNotEmpty()
  @IsString()
  nombre: string;

  // Solo números
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'El código de dependencia debe contener solo números' })
  codigoDependencia: string;

  // Letras y números
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]+$/, { message: 'El código de plantel debe ser alfanumérico' })
  codigoPlantel: string;

  // Solo números
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'El código estadístico debe contener solo números' })
  codigoEstadistico: string;

  // Solo números
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'El código SICA debe contener solo números' })
  codigoSICA: string;
}