import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../../entities/notas.entity';
import { Definitiva } from '../../entities/definitivas.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';
import { EstadoAcademico } from '../../enums/estado-academico.enum';
import { TipoEvaluacion } from '../../enums/tipo-evaluacion.enum';

@Injectable()
export class DefinitivasService {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepo: Repository<Nota>,
    @InjectRepository(Definitiva)
    private readonly definitivaRepo: Repository<Definitiva>,
    @InjectRepository(EscolaridadMateria)
    private readonly escolaridadMateriaRepo: Repository<EscolaridadMateria>,
  ) {}

  async calcularDefinitiva(
    idEscolaridad: string,
    idMateria: string,
  ) {
    // Primero, encontrar la EscolaridadMateria correspondiente
    const escolaridadMateria = await this.escolaridadMateriaRepo.findOne({
      where: {
        escolaridad: { idEscolaridad },
        materiaPlanEstudio: { materia: { idMateria } }, // Asumiendo que MateriaPlanEstudio tiene materia
      },
      relations: ['notas'],
    });

    if (!escolaridadMateria) {
      throw new Error('EscolaridadMateria no encontrada');
    }

    const notas = escolaridadMateria.notas;

    if (notas.length === 0) {
      return null; // O manejar como prefieras
    }

    // Calcular el promedio
    const acumulado = notas.reduce((acc, nota) => acc + nota.nota, 0);
    const promedio = acumulado / notas.length;

    const estado =
      promedio >= 10 ? EstadoAcademico.APROBADO : EstadoAcademico.REPROBADO;

    // Crear y guardar la definitiva
    const definitiva = this.definitivaRepo.create({
      escolaridadMateria,
      notaFinal: promedio,
      tipoEvaluacion: TipoEvaluacion.FINAL,
      estadoAcademico: estado,
    });

    return this.definitivaRepo.save(definitiva);
  }
}
