import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateDependenciaDto {

  @IsNotEmpty()
  @IsNumber()
  codigoDependencia: number;

  @IsNotEmpty()
  @IsString()
  nombreDependencia: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  estado: string;

  @IsNotEmpty()
  @IsString()
  municipio: string;

  @IsNotEmpty()
  @IsString()
  parroquia: string;
}
