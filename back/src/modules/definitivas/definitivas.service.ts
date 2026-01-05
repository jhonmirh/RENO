import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../../entities/notas.entity';
import { Definitiva } from '../../entities/definitivas.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';
import { Evaluacion } from '../../entities/evaluaciones.entity';

@Injectable()
export class DefinitivasService {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepo: Repository<Nota>,

    @InjectRepository(Definitiva)
    private readonly definitivaRepo: Repository<Definitiva>,

    @InjectRepository(EscolaridadMateria)
    private readonly escolaridadMateriaRepo: Repository<EscolaridadMateria>,

    @InjectRepository(Evaluacion)
    private readonly evaluacionRepo: Repository<Evaluacion>,
  ) {}

  async calcularDefinitiva(idEscolaridadMateria: string) {
    // 1 Buscar la relación estudiante-materia
    const escolaridadMateria = await this.escolaridadMateriaRepo.findOne({
      where: { idEscolaridadMateria },
      relations: ['escolaridad', 'materia'],
    });

    if (!escolaridadMateria) {
      throw new ForbiddenException('EscolaridadMateria no encontrada');
    }

    // 2 Obtener todas las notas de esa materia
    const notas = await this.notaRepo.find({
      where: { escolaridadMateria: { idEscolaridadMateria } },
      relations: ['evaluacion'],
    });

    if (notas.length === 0) {
      throw new ForbiddenException('No hay notas registradas para esta materia');
    }

    // 3 Calcular definitiva
    let definitiva = 0;

    // Para cada nota de la materia
    for (const nota of notas) {
      const evaluacion = nota.evaluacion;

      // Si la evaluación tiene dos formas, calculamos el promedio
      let notaEvaluacion = nota.nota;  // Si tiene una sola forma, usamos la nota directamente
      if (evaluacion.numeroEvaluacion === 2 && nota.notaDos != null) {
        notaEvaluacion = (nota.nota + nota.notaDos) / 2;  // Promedio de las dos formas
      }

      // Calculamos la nota ponderada para esta evaluación
      definitiva += notaEvaluacion * (evaluacion.porcentaje / 100);
    }

    // 4 Determinar el estado académico
    const estadoAcademico = definitiva >= 3.0 ? 'APROBADO' : 'REPROBADO';

    // 5Guardar o actualizar la nota definitiva
    let registro = await this.definitivaRepo.findOne({
      where: { escolaridadMateria: { idEscolaridadMateria } },
    });

    if (!registro) {
      // Si no existe la definitiva, la creamos
      registro = this.definitivaRepo.create({
        escolaridadMateria,
        notaFinal: definitiva,
        estadoAcademico,
      });
    } else {
      // Si ya existe, actualizamos la nota final y el estado
      registro.notaFinal = definitiva;
      registro.estadoAcademico = estadoAcademico;
    }

    return this.definitivaRepo.save(registro);
  }
}
