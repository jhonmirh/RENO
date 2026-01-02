import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { RolUsuario } from '../../entities/usuarios.entity';

export class CreateUsuarioDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(RolUsuario)
  rol: RolUsuario;

  @IsOptional()
  idCedulaDocente?: string;
}
