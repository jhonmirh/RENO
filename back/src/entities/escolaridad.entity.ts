import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estudiante } from './estudiantes.entity';
import { AnoEscolar } from './anio_escolar.entity';
import { PlanEstudio } from './plan_estudios.entity';
import { Nota } from './notas.entity';
import { Definitiva } from './definitivas.entity';

@Entity('escolaridad')
export class Escolaridad {
  @PrimaryGeneratedColumn({ name: 'id_escolaridad' })
  idEscolaridad: number;

    @Column({ name: 'grado_actual' })
    gradoActual: string;

    @Column({ name: 'seccion_actual' })
    seccionActual: string;

    @Column()
    mención: string;

    @Column()
    fecha_ingreso: Date;

    @Column()
    plantel_origen: string;

    @Column()
    estado_plantel_origen: string;

    @Column()
    municipio_plantel_origen: string;

    @Column()
    condicion: string;

    @Column()
    id_cedula_estudiante: string;

    @Column()
    id_anio_escolar: number;

    @Column()
    id_plan_estudio: number;

  @ManyToOne(() => Estudiante)
  @JoinColumn({ name: 'id_cedula_estudiante' })
  estudiante: Estudiante;

  @ManyToOne(() => AnoEscolar)
  @JoinColumn({ name: 'id_anio_escolar' })
  anoEscolar: AnoEscolar;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @OneToMany(() => Nota, n => n.escolaridad)
  notas: Nota[];

  @OneToMany(() => Definitiva, d => d.escolaridad)
  definitivas: Definitiva[];
}
