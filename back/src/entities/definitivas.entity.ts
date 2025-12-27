import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { EscolaridadMateria } from './materias_escolaridad.entity';
import { TipoEvaluacion } from '../enums/tipo-evaluacion.enum';
import { EstadoAcademico } from '../enums/estado-academico.enum';

@Entity('definitiva')
@Unique(['escolaridadMateria'])
export class Definitiva {

  @PrimaryGeneratedColumn('uuid')
  idDefinitiva: string;

  @ManyToOne(
    () => EscolaridadMateria,
    em => em.definitivas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'id_escolaridad_materia' })
  escolaridadMateria: EscolaridadMateria;

  @Column({ name: 'nota_final', type: 'numeric' })
  notaFinal: number;

  @Column({
    name: 'tipo_evaluacion',
    type: 'enum',
    enum: TipoEvaluacion,
  })
  tipoEvaluacion: TipoEvaluacion;

  @Column({
    name: 'estado_academico',
    type: 'enum',
    enum: EstadoAcademico,
  })
  estadoAcademico: EstadoAcademico;
}
