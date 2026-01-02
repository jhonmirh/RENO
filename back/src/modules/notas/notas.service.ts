import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../../entities/notas.entity';
import { MateriaDocente } from '../../entities/materias_docentes.entity';
import { CreateNotaDto } from '../../dto/notas/create-nota.dto';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepo: Repository<Nota>,

    @InjectRepository(MateriaDocente)
    private readonly materiaDocenteRepo: Repository<MateriaDocente>,
  ) {}

  async cargarNota(dto: CreateNotaDto, user: any) {
    // 1️⃣ Verificar que la materia pertenece al docente (simplificado)
    // Aquí deberías implementar la lógica para verificar permisos basada en idEscolaridadMateria
    // Por ahora, asumimos que el usuario tiene permiso

    // 2️⃣ Crear nota
    const nota = this.notaRepo.create(dto);
    return this.notaRepo.save(nota);
  }
}
