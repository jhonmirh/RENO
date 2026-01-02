import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../../entities/notas.entity';
import { MateriaDocente } from '../../entities/materias_docentes.entity';
import { Evaluacion } from '../../entities/evaluaciones.entity';
import { Escolaridad } from '../../entities/escolaridad.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';
import { CreateNotaDto } from '../../dto/notas/create-nota.dto';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepo: Repository<Nota>,

    @InjectRepository(MateriaDocente)
    private readonly materiaDocenteRepo: Repository<MateriaDocente>,

    @InjectRepository(Evaluacion)
    private readonly evaluacionRepo: Repository<Evaluacion>,

    @InjectRepository(Escolaridad)
    private readonly escolaridadRepo: Repository<Escolaridad>,

    @InjectRepository(EscolaridadMateria)
    private readonly escolaridadMateriaRepo: Repository<EscolaridadMateria>,
  ) {}

  async cargarNota(dto: CreateNotaDto, user: any) {
    // 1️⃣ Verificar que la materia pertenece al docente (simplificado)
    // Aquí deberías implementar la lógica para verificar permisos basada en idEscolaridadMateria
    // Por ahora, asumimos que el usuario tiene permiso

    // 2️⃣ Encontrar evaluacion
    const evaluacion = await this.evaluacionRepo.findOne({
      where: { idEvaluacion: dto.idEvaluacion },
    });

    if (!evaluacion) {
      throw new ForbiddenException('Evaluación no encontrada');
    }

    // 3️⃣ Encontrar escolaridadMateria
    const escolaridadMateria = await this.escolaridadMateriaRepo.findOne({
      where: { idEscolaridadMateria: dto.idEscolaridadMateria },
      relations: ['escolaridad'],
    });

    if (!escolaridadMateria) {
      throw new ForbiddenException('EscolaridadMateria no encontrada');
    }

    const escolaridad = escolaridadMateria.escolaridad;

    // 4️⃣ Crear nota
    const nota = new Nota();
    nota.escolaridadMateria = escolaridadMateria;
    nota.docente = user; // Asumiendo que user es Docente
    nota.numeroForma = dto.numeroForma;
    nota.nota = dto.nota;
    nota.fechaRegistro = new Date();

    return this.notaRepo.save(nota);
  }
}
