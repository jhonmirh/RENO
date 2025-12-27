import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, OneToMany } from 'typeorm';
import { PlanEstudio } from './plan_estudios.entity';
import { Materia } from './materias.entity';
import { EscolaridadMateria } from './materias_escolaridad.entity';


@Entity('materias_plan_estudio')
@Unique(['planEstudio', 'grado', 'materia'])
export class MateriaPlanEstudio {

  @PrimaryGeneratedColumn('uuid')
  idMateriaPlanEstudio: string;

  @Column({ name: 'id_plan_estudio' })
  idPlanEstudio: string;

  @Column({ name: 'id_materia' })
  idMateria: string;

  @ManyToOne(() => PlanEstudio, pe => pe.materiaPlanEstudios)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @ManyToOne(() => Materia, m => m.materiaPlanEstudios)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @Column({ type: 'int' })
  grado: number; // 1°, 2°, 3°…

  @Column({ name: 'horas_semanales', nullable: true })
  horasSemanales?: number;

  @OneToMany(() => EscolaridadMateria, em => em.materiaPlanEstudio)
  escolaridadMaterias: EscolaridadMateria[];
}
