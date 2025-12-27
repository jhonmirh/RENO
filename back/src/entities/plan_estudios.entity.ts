import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MateriaPlanEstudio } from './materias_plan_estudio.entity';

@Entity('planes_estudio')
export class PlanEstudio {
  
  @PrimaryGeneratedColumn('uuid')
  idPlanEstudio: string;

  @Column()
  nombre: string;

  @Column()
  nivel: string;

  @Column({ name: 'cantidad_grados' })
  cantidadGrados: number; // 5 o 6

  @OneToMany(() => MateriaPlanEstudio, mpe => mpe.planEstudio)
  materiaPlanEstudios: MateriaPlanEstudio[];

  @OneToMany('Materia', 'planEstudio')
  materias: any[];
}