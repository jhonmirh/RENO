import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsBoolean,
  IsOptional,
  IsEmail,
} from 'class-validator';

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
  @IsNotEmpty() @IsString() ced_madre: string;

  @IsNotEmpty() @IsString() talla_camisa: string;
  @IsNotEmpty() @IsString() talla_pantalon: string;
  @IsNotEmpty() @IsString() talla_zapato: string;

  @IsNotEmpty() @IsString() grupo_sanguineo: string;
  @IsNotEmpty() alergias: boolean;
  @IsOptional() @IsString() des_alergia?: string;
  @IsNotEmpty() discapacidad: boolean;
  @IsOptional() @IsString() des_discapacidad?: string;
  @IsNotEmpty() @IsString() estatura: string;
  @IsNotEmpty() @IsString() peso: string;

  @IsNotEmpty() @IsBoolean() tiene_vivienda_propia: boolean;
  @IsNotEmpty() @IsString() tipo_vivienda: string;
  @IsNotEmpty() @IsString() necesidad_vivienda_mejoras: string;

  @IsNotEmpty() @IsBoolean() tiene_carro: boolean;
  @IsNotEmpty() @IsBoolean() tiene_moto: boolean;
  @IsOptional() @IsString() placa_vehiculo?: string;
  @IsOptional() @IsString() placa_moto?: string;

  @IsNotEmpty() @IsString() nivel_instruccion: string;
  @IsNotEmpty() @IsString() titulo_obtenido_pregrado: string;
  @IsOptional() @IsString() titulo_obtenido_postgrado_especializacion?: string;
  @IsOptional() @IsString() titulo_obtenido_postgrado_especializacion2?: string;
  @IsOptional() @IsString() titulo_obtenido_postgrado_maestria?: string;
  @IsOptional() @IsString() titulo_obtenido_postgrado_maestria2?: string;
  @IsOptional() @IsString() titulo_obtenido_postgrado_doctorado?: string;
  @IsOptional() @IsString() titulo_obtenido_postgrado_phd?: string;

  @IsNotEmpty() @IsString() codigoDependencia: string;
  @IsNotEmpty() @IsString() codigo_cargo: string;
  @IsNotEmpty() @IsString() descripcion_cargo: string;
  @IsNotEmpty() @IsString() estatus_laboral: string;

  @IsNotEmpty() @IsDateString() fecha_ingreso: Date;
  @IsNotEmpty() @IsString() tiempo_servicio: string;
  @IsNotEmpty() @IsString() codicion_trabajo: string;
  @IsOptional() @IsDateString() fecha_egreso?: Date;
  @IsOptional() @IsString() motivo_egreso?: string;

  @IsOptional() @IsString() foto_docente?: string;
  @IsOptional() @IsString() banco_ctaNomina?: string;
  @IsOptional() @IsString() numero_ctaNomina?: string;
  @IsOptional() @IsString() tipo_ctaNomina?: string;
}
