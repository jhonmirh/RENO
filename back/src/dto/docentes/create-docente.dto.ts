import { IsNotEmpty, IsString, IsDateString, IsBoolean, IsEmail, IsUUID } from 'class-validator';

export class CreateDocenteDto {

  @IsNotEmpty() @IsString() idCedulaDocente: string;

  @IsNotEmpty() @IsString() estado_civil: string;
  @IsNotEmpty() @IsString() nacionalidad: string;

  @IsNotEmpty() @IsString() nombres: string;
  @IsNotEmpty() @IsString() apellidos: string;

  @IsNotEmpty() @IsDateString() fechaNacimiento: Date;

  @IsNotEmpty() @IsString() lugar_nacimiento: string;
  @IsNotEmpty() @IsString() municipio_nacimiento: string;
  @IsNotEmpty() @IsString() estado_nacimiento: string;
  @IsNotEmpty() @IsString() parroquia_nacimiento: string;
  @IsNotEmpty() @IsString() pais_nacimiento: string;

  @IsNotEmpty() @IsString() sexo: string;
  @IsNotEmpty() @IsString() direccion: string;
  @IsNotEmpty() @IsString() telefono_fijo: string;
  @IsNotEmpty() @IsString() telefono_movil: string;

  @IsNotEmpty() @IsEmail() email: string;
  
  @IsNotEmpty() @IsUUID() idInstitucion: string; // Nueva relación con Institución
}
