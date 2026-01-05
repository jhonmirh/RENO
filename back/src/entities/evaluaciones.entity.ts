import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MomentoPedagogico } from './momentos_pedagogicos.entity';
import { Materia } from './materias.entity';
import { AnoEscolar } from './anio_escolar.entity';  // Relación con Año Escolar

@Entity('evaluaciones')
export class Evaluacion {
  @PrimaryGeneratedColumn('uuid')
  idEvaluacion: string;

  @ManyToOne(() => MomentoPedagogico)
  @JoinColumn({ name: 'id_momento' })
  momento: MomentoPedagogico;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @ManyToOne(() => AnoEscolar)  // Relación con Año Escolar
  @JoinColumn({ name: 'id_ano_escolar' })
  anoEscolar: AnoEscolar;  // Año en el que se realiza la evaluación

  @Column()
  numeroEvaluacion: number; // 1,2,3,4,5

  @Column({ type: 'numeric' })
  porcentaje: number;  // Porcentaje de la evaluación

  @Column({ default: false })
  acumulativo: boolean;  // ¿Es acumulativo?

  @Column({ type: 'numeric', nullable: true })
  notaUno: number;  // Nota de la primera forma de evaluación

  @Column({ type: 'numeric', nullable: true })
  notaDos: number;  // Nota de la segunda forma de evaluación (si aplica)
}
