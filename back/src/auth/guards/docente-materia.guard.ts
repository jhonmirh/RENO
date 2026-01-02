import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MateriaDocente } from '../../entities/materias_docentes.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';

@Injectable()
export class DocenteMateriaGuard implements CanActivate {
  constructor(
    @InjectRepository(MateriaDocente)
    private readonly materiaDocenteRepo: Repository<MateriaDocente>,
    @InjectRepository(EscolaridadMateria)
    private readonly escolaridadMateriaRepo: Repository<EscolaridadMateria>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const docenteId = request.user.idCedulaDocente; // Ajustar según el JWT
    const { idEscolaridadMateria } = request.body;

    // Verificar acceso
    const tieneAcceso = await this.verificarAccesoDocente(docenteId, idEscolaridadMateria);

    if (!tieneAcceso) {
      throw new ForbiddenException('No tiene permiso para registrar notas en esta materia');
    }

    return true;
  }

  async verificarAccesoDocente(docenteId: string, escolaridadMateriaId: string): Promise<boolean> {
    // Obtener la materia de escolaridadMateria
    const escolaridadMateria = await this.escolaridadMateriaRepo.findOne({
      where: { idEscolaridadMateria: escolaridadMateriaId },
      relations: ['materiaPlanEstudio'],
    });

    if (!escolaridadMateria) return false;

    const idMateria = escolaridadMateria.materiaPlanEstudio.materia.idMateria;

    // Verificar si el docente tiene esa materia
    const count = await this.materiaDocenteRepo.count({
      where: {
        idMateria,
        idCedulaDocente: docenteId,
      },
    });

    return count > 0;
  }
}