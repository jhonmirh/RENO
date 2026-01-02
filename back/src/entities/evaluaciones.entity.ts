import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MomentoPedagogico } from './momentos_pedagogicos.entity';
import { Materia } from './materias.entity';

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

  @Column()
  numeroEvaluacion: number; // 1,2,3,4,5

  @Column({ type: 'numeric' })
  porcentaje: number;

  @Column({ default: false })
  acumulativo: boolean;
}
