import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Materia } from './materias.entity';

@Entity('planes_estudio')
export class PlanEstudio {
  @PrimaryGeneratedColumn({ name: 'id_plan_estudio' })
  idPlanEstudio: number;

  @Column()
  nombre: string;

  @Column()
  nivel: string;

  @OneToMany(() => Materia, m => m.planEstudio)
  materias: Materia[];
}