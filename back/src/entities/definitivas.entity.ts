import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Escolaridad } from './escolaridad.entity';
import { Materia } from './materias.entity';
import { TipoEvaluacion } from '../enums/tipo-evaluacion.enum';
import { EstadoAcademico } from '../enums/estado-academico.enum';

@Entity('definitiva')
@Unique(['escolaridad', 'materia'])
export class Definitiva {

  @PrimaryGeneratedColumn('uuid')
  idDefinitiva: string;

  @ManyToOne(() => Escolaridad)
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: Escolaridad;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

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
