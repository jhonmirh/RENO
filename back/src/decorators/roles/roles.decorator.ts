import { SetMetadata } from '@nestjs/common';
import { RolUsuario } from '../../entities/usuarios.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RolUsuario[]) =>
  SetMetadata(ROLES_KEY, roles);