import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Estudiante } from './estudiantes.entity';
import { AnoEscolar } from './anio_escolar.entity';
import { PlanEstudio } from './plan_estudios.entity';
import { Nota } from './notas.entity';
import { Definitiva } from './definitivas.entity';
import { EscolaridadMateria } from './materias_escolaridad.entity';
import { CondicionEscolaridad } from '../enums/condicion-escolaridad.enum';

@Entity('escolaridad')
export class Escolaridad {

  @PrimaryGeneratedColumn('uuid')
  idEscolaridad: string;

  @Column({ name: 'grado_actual' })
  gradoActual: string;

  @Column({ name: 'seccion_actual' })
  seccionActual: string;

  @Column({ name: 'mencion', nullable: true })
  mencion?: string;

  @Column({ name: 'fecha_ingreso', type: 'date' })
  fechaIngreso: Date;

  @Column({ name: 'plantel_origen', nullable: true })
  plantelOrigen?: string;

  @Column({ name: 'estado_plantel_origen', nullable: true })
  estadoPlantelOrigen?: string;

  @Column({ name: 'municipio_plantel_origen', nullable: true })
  municipioPlantelOrigen?: string;

  @Column({
    type: 'enum',
    enum: CondicionEscolaridad,
  })
  condicion: CondicionEscolaridad;

  /* 🔗 Relaciones */

  @ManyToOne(() => Estudiante)
  @JoinColumn({ name: 'id_cedula_estudiante' })
  estudiante: Estudiante;

  @ManyToOne(() => AnoEscolar)
  @JoinColumn({ name: 'id_anio_escolar' })
  anoEscolar: AnoEscolar;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @OneToMany(() => EscolaridadMateria, em => em.escolaridad)
  escolaridadMaterias: EscolaridadMateria[];
}
