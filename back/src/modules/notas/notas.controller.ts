import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../decorators/roles/roles.decorator';
import { RolUsuario } from '../../entities/usuarios.entity';
import { NotasService } from './notas.service';
import { CreateNotaDto } from '../../dto/notas/create-nota.dto';
import { DocenteMateriaGuard } from './guards/docente-materia.guard'; // Asegúrate de que el guard esté correctamente importado

@Controller('notas')
@UseGuards(JwtAuthGuard, RolesGuard)  // Verifica autenticación y roles
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post()
  @Roles(RolUsuario.DOCENTE)  // Solo los docentes pueden acceder a esta ruta
  @UseGuards(DocenteMateriaGuard)  // Asegura que el docente solo registre notas de sus materias
  async cargarNota(@Body() dto: CreateNotaDto, @Req() req: any) {
    // Llama al servicio para registrar la nota
    return this.notasService.cargarNota(dto, req.user);  // `req.user` contiene el docente autenticado
  }
}
