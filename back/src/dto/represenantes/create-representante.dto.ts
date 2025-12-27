import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateRepresentanteDto {
  @IsNotEmpty() @IsString() idCedulaRepresentante: string;

  @IsNotEmpty() @IsString() nombres: string;
  @IsNotEmpty() @IsString() apellidos: string;

  @IsNotEmpty() @IsString() direccion: string;
  @IsNotEmpty() @IsString() telefono_fijo: string;
  @IsNotEmpty() @IsString() telefono_movil: string;
  @IsNotEmpty() @IsEmail() email: string;

  @IsNotEmpty() @IsString() parentesco: string;
  @IsNotEmpty() @IsString() ocupacion: string;
  @IsNotEmpty() @IsString() lugar_trabajo: string;
  @IsNotEmpty() @IsString() telefono_trabajo: string;
  @IsNotEmpty() @IsString() direccion_trabajo: string;
  @IsNotEmpty() @IsString() nivel_escolaridad: string;

  @IsNotEmpty() @IsBoolean() vive_con_estudiante: boolean;
  @IsNotEmpty() @IsBoolean() presenta_autorizacion: boolean;
  @IsNotEmpty() @IsString() descripcion_autorizacion: string;

  @IsNotEmpty() @IsDateString() fecha_nacimiento: Date;
  @IsNotEmpty() @IsString() lugar_nacimiento: string;
  @IsNotEmpty() @IsString() municipio_nacimiento: string;
  @IsNotEmpty() @IsString() estado_nacimiento: string;
  @IsNotEmpty() @IsString() parroquia_nacimiento: string;
  @IsNotEmpty() @IsString() pais_nacimiento: string;
  @IsNotEmpty() @IsString() sexo: string;
  @IsNotEmpty() @IsString() estado_civil: string;
  @IsNotEmpty() @IsString() nacionalidad: string;

  @IsNotEmpty() @IsBoolean() posee_cuentabancaria: boolean;
  @IsNotEmpty() @IsString() nombre_banco: string;
  @IsNotEmpty() @IsString() numero_cuenta_bancaria: string;
  @IsNotEmpty() @IsString() tipo_cuenta_bancaria: string;

  @IsNotEmpty() @IsString() tipo_sangre: string;
  @IsNotEmpty() @IsBoolean() discapacidad: boolean;
  @IsNotEmpty() @IsString() des_discapacidad: string;

  @IsNotEmpty() @IsString() idCedulaReferencia: string; // FK referencia personal
}
