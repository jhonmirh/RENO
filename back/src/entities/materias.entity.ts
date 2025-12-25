import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PlanEstudio } from './plan_estudios.entity';
import { Nota } from './notas.entity';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn({ name: 'id_materia' })
  idMateria: number;

  @Column()
  nombre: string;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @OneToMany(() => Nota, n => n.materia)
  notas: Nota[];
}
