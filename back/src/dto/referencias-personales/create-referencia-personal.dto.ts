import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReferenciaPersonalDto {
  @IsNotEmpty() @IsString() idCedulaReferencia: string;
  @IsNotEmpty() @IsString() nombres: string;
  @IsNotEmpty() @IsString() apellidos: string;
  @IsNotEmpty() @IsString() telefono: string;
  @IsNotEmpty() @IsString() relacion: string;
  @IsNotEmpty() @IsString() direccion: string;
  @IsNotEmpty() @IsString() ocupacion: string;
  @IsNotEmpty() @IsString() lugar_trabajo: string;
}
