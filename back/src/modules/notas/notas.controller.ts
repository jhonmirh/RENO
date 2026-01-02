import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../decorators/roles/roles.decorator';
import { RolUsuario } from '../../entities/usuarios.entity';
import { NotasService } from './notas.service';
import { CreateNotaDto } from '../../dto/notas/create-nota.dto';

@Controller('notas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NotasController {

  constructor(private readonly notasService: NotasService) {}

  @Post()
  @Roles(RolUsuario.DOCENTE)
  cargarNota(@Body() dto: CreateNotaDto, @Req() req: any) {
    return this.notasService.cargarNota(dto, req.user);
  }
}
