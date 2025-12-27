import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsEnum,
  IsDateString,
  IsNumber,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Sexo } from '../../enums/sexo.enum';
import { Nacionalidad } from '../../enums/nacionalidad.enum';
import { EstadoCivil } from '../../enums/estado_civil.enum';
import { GrupoSanguineo } from '../../enums/GrupoSanguineo.enum';

// Embeddeds

class DatosFamiliarDto {
  @IsNotEmpty() @IsString() cedula: string;
  @IsNotEmpty() @IsEnum(Nacionalidad) nacionalidad: Nacionalidad;
  @IsNotEmpty() @IsString() nombre: string;
  @IsNotEmpty() @IsString() apellido: string;
  @IsNotEmpty() @IsString() direccion: string;
  @IsNotEmpty() @IsString() telefono: string;
}

class TallasDto {
  @IsNotEmpty() @IsString() camisa: string;
  @IsNotEmpty() @IsString() pantalon: string;
  @IsNotEmpty() @IsString() zapato: string;
}

class SaludDto {
  @IsNotEmpty() @IsEnum(GrupoSanguineo) grupo_sanguineo: GrupoSanguineo;
  @IsNotEmpty() alergias: boolean;
  @IsOptional() @IsString() descripcion_alergia?: string;
  @IsNotEmpty() discapacidad: boolean;
  @IsOptional() @IsString() descripcion_discapacidad?: string;
  @IsNotEmpty() @IsString() estatura: string;
  @IsNotEmpty() @IsString() peso: string;
}

export class CreateEstudianteDto {
  @IsNotEmpty() @IsString() idCedulaEstudiante: string;

  @IsNotEmpty() @IsEnum(EstadoCivil) estado_civil: EstadoCivil;
  @IsNotEmpty() @IsEnum(Sexo) sexo: Sexo;
  @IsNotEmpty() @IsEnum(Nacionalidad) nacionalidad: Nacionalidad;

  @IsNotEmpty() @IsString() nombre: string;
  @IsNotEmpty() @IsString() apellido: string;

  @IsNotEmpty() @IsDateString() fechaNacimiento: Date;

  @IsNotEmpty() @IsString() lugar_nacimiento: string;
  @IsNotEmpty() @IsString() municipio_nacimiento: string;
  @IsNotEmpty() @IsString() estado_nacimiento: string;
  @IsNotEmpty() @IsString() parroquia_nacimiento: string;
  @IsNotEmpty() @IsString() pais_nacimiento: string;

  @IsNotEmpty() @IsNumber() edad: number;
  @IsNotEmpty() @IsString() direccion: string;
  @IsNotEmpty() @IsString() telefono: string;
  @IsNotEmpty() @IsEmail() email: string;

  @ValidateNested() @Type(() => DatosFamiliarDto) madre: DatosFamiliarDto;
  @ValidateNested() @Type(() => DatosFamiliarDto) padre: DatosFamiliarDto;

  @ValidateNested() @Type(() => TallasDto) tallas: TallasDto;
  @ValidateNested() @Type(() => SaludDto) salud: SaludDto;

  @IsNotEmpty() @IsString() idCedulaRepresentante: string;
}
