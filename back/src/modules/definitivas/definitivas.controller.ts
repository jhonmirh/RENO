import { Controller, Post, Param, UseGuards } from '@nestjs/common';
import { DefinitivasService } from './definitivas.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../decorators/roles/roles.decorator';
import { RolUsuario } from '../../entities/usuarios.entity';

@Controller('definitivas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DefinitivasController {
  constructor(private readonly definitivasService: DefinitivasService) {}

  @Post('calcular/:idEscolaridadMateria')
  @Roles(RolUsuario.COORDINADOR)
  calcular(@Param('idEscolaridadMateria') id: string) {
    return this.definitivasService.calcularDefinitiva(id);
  }
}
