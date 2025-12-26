import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('planes_estudio')
export class PlanEstudio {
  
  @PrimaryGeneratedColumn('uuid')
  idPlanEstudio: string;

  @Column()
  nombre: string;

  @Column()
  nivel: string;

  @OneToMany('Materia', 'planEstudio')
  materias: any[];
}