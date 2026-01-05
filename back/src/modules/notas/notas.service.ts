import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../../entities/notas.entity';
import { Evaluacion } from '../../entities/evaluaciones.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';
import { Docente } from '../../entities/docentes.entity';
import { CreateNotaDto } from '../../dto/notas/create-nota.dto';  // Asegúrate de importar el DTO correcto

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepo: Repository<Nota>,

    @InjectRepository(Evaluacion)
    private readonly evaluacionRepo: Repository<Evaluacion>,

    @InjectRepository(EscolaridadMateria)
    private readonly escolaridadMateriaRepo: Repository<EscolaridadMateria>,

    @InjectRepository(Docente)
    private readonly docenteRepo: Repository<Docente>,
  ) { }

  // Método para registrar la nota de una evaluación
  async registrarNota(createNotaDto: CreateNotaDto, user: any) {
    // 1️⃣ Verificar que la evaluación existe
    // Línea 29
    const evaluacion = await this.evaluacionRepo.findOne({
      where: { idEvaluacion: createNotaDto.idEvaluacion },  // Aquí es donde estructuramos correctamente la búsqueda
    });


    if (!evaluacion) {
      throw new ForbiddenException('Evaluación no válida');
    }

    // 2️⃣ Verificar que la materia del estudiante existe
    const escolaridadMateria = await this.escolaridadMateriaRepo.findOne({
      where: { idEscolaridadMateria: createNotaDto.idEscolaridadMateria },  // Aquí estructuramos la búsqueda correctamente
    });

    if (!escolaridadMateria) {
      throw new ForbiddenException('Materia no encontrada para este estudiante');
    }

    // 3️⃣ Determinar la nota definitiva
    let notaDefinitiva = createNotaDto.notaUno >= 10 ? createNotaDto.notaUno : createNotaDto.notaDos;

    // 4️⃣ Crear la nueva nota
    const nuevaNota = this.notaRepo.create({
      evaluacion,
      escolaridadMateria,
      docente: user,  // El docente que está registrando la nota
      numeroForma: createNotaDto.numeroForma,
      nota: notaDefinitiva,  // Guardamos la nota definitiva
      notaConsejo: createNotaDto.notaConsejo || null,  // Guardamos la nota consejo, si es que tiene
      fechaRegistro: new Date(),
      observaciones: createNotaDto.observaciones || '',  // Guardamos las observaciones
    });

    // 5️⃣ Guardar la nueva nota en la base de datos
    return await this.notaRepo.save(nuevaNota);
  }

  // Método adicional para actualizar la notaConsejo
  async actualizarNotaConsejo(idNota: string, nuevaNotaConsejo: number, observaciones: string) {
    const nota = await this.notaRepo.findOne(idNota);

    if (!nota) {
      throw new ForbiddenException('Nota no encontrada');
    }

    // Actualizamos la nota consejo y las observaciones
    nota.notaConsejo = nuevaNotaConsejo;
    nota.observaciones = observaciones;

    return await this.notaRepo.save(nota);
  }
}
