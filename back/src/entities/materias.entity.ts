import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PlanEstudio } from './plan_estudios.entity';
import { Nota } from './notas.entity';
import { MateriaDocente } from './materias_docentes.entity';

@Entity('materias')
export class Materia {

  @PrimaryGeneratedColumn('uuid')
  idMateria: string;

  @Column()
  nombre: string;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @OneToMany(() => Nota, n => n.materia)
  notas: Nota[];

  @OneToMany(() => MateriaDocente, md => md.materia)
  materiasDocentes: MateriaDocente[];
}
