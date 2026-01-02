import {
  Controller,
  Post,
  Body,
  Req,
  Get,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from '../../dto/usuarios/create-usuario.dto';
import { UpdateUsuarioDto } from '../../dto/usuarios/update-usuario.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../decorators/roles/roles.decorator';
import { RolUsuario } from '../../entities/usuarios.entity';

@Controller('usuarios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsuariosController {

  constructor(private readonly usuariosService: UsuariosService) {}

  // SOLO ADMIN puede crear usuarios
  @Post()
  @Roles(RolUsuario.ADMIN_INSTITUCION)
  create(@Body() dto: CreateUsuarioDto, @Req() req: any) {
    return this.usuariosService.create(dto, req.user.idInstitucion);
  }

  // ADMIN puede ver usuarios de su institución
  @Get()
  @Roles(RolUsuario.ADMIN_INSTITUCION)
  findAll(@Req() req: any) {
    return this.usuariosService.findAllByInstitucion(req.user.idInstitucion);
  }

  // ADMIN puede actualizar usuarios
  @Patch(':id')
  @Roles(RolUsuario.ADMIN_INSTITUCION)
  update(@Param('id') id: string, @Body() dto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, dto);
  }
}
