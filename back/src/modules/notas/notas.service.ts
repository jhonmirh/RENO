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
    // 1. Verificar que el docente tiene acceso a la materia del estudiante
    const materiaDocente = await this.materiaDocenteRepo.findOne({
      where: {
        docente: { idCedulaDocente: user.id }, // Aquí usamos la relación docente.idCedulaDocente
        materia: { idMateria: dto.idEvaluacion },  // Relación con la materia de la evaluación
      },
    });

    if (!materiaDocente) {
      throw new ForbiddenException('No tiene permiso para registrar notas en esta materia');
    }

    // 2. Buscar la evaluación correspondiente
    const evaluacion = await this.evaluacionRepo.findOne({
      where: { idEvaluacion: dto.idEvaluacion },
    });

    if (!evaluacion) {
      throw new ForbiddenException('Evaluación no válida');
    }

    // 3. Buscar la materia del estudiante (escolaridadMateria)
    const escolaridadMateria = await this.escolaridadMateriaRepo.findOne({
      where: { idEscolaridadMateria: dto.idEscolaridadMateria },
      relations: ['escolaridad'],
    });

    if (!escolaridadMateria) {
      throw new ForbiddenException('Materia del estudiante no válida');
    }

    // 4. Obtener la escolaridad del estudiante
    const escolaridad = escolaridadMateria.escolaridad;

    // 5. Crear la entidad Nota
    const nota = new Nota();
    nota.escolaridadMateria = escolaridadMateria;
    nota.docente = user;  // Asumimos que `user` contiene el docente autenticado
    nota.numeroForma = dto.numeroForma;
    nota.nota = dto.nota;
    nota.fechaRegistro = new Date();

    // 6. Guardar la nota en la base de datos
    return this.notaRepo.save(nota);
  }
}
