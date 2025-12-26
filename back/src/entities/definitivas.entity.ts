import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Escolaridad } from './escolaridad.entity';
import { Materia } from './materias.entity';

@Entity('definitiva')
export class Definitiva {
  @PrimaryGeneratedColumn('uuid')
  idDefinitiva: string;

  @ManyToOne(() => Escolaridad)
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: Escolaridad;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @Column({ name: 'nota_final' })
  notaFinal: number;

  @Column({ name: 'tipo_evaluacion' })
  tipoEvaluacion: string;

  @Column({ name: 'estado_academico' })
  estadoAcademico: string;
}
