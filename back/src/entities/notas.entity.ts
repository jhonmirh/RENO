import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Evaluacion } from './evaluaciones.entity';
import { EscolaridadMateria } from './materias_escolaridad.entity';
import { Docente } from './docentes.entity';
@Entity('notas')
export class Nota {

  @PrimaryGeneratedColumn('uuid')
  idNota: string;

  @ManyToOne(() => Evaluacion)
  @JoinColumn({ name: 'id_evaluacion' })
  evaluacion: Evaluacion;

  @ManyToOne(() => EscolaridadMateria)
  @JoinColumn({ name: 'id_escolaridad_materia' })
  escolaridadMateria: EscolaridadMateria;

  @ManyToOne(() => Docente)
  @JoinColumn({ name: 'id_docente' })
  docente: Docente;

  @Column()
  numeroForma: number; // 1 o 2

  @Column({ type: 'numeric' })
  nota: number;

  @Column({ type: 'timestamp' })
  fechaRegistro: Date;
}
