import { IsNotEmpty, IsString, IsEnum, IsDateString, IsNumber, IsUUID } from 'class-validator';
import { Sexo } from '../../enums/sexo.enum';
import { Nacionalidad } from '../../enums/nacionalidad.enum';
import { EstadoCivil } from '../../enums/estado_civil.enum';
import { GrupoSanguineo } from '../../enums/GrupoSanguineo.enum';

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
  @IsNotEmpty() @IsString() email: string;

  @IsNotEmpty() @IsUUID() idCedulaRepresentante: string;
  
  @IsNotEmpty() @IsUUID() idInstitucion: string; // Nueva relación con Institución
}
