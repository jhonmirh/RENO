import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PlanEstudio } from './plan_estudios.entity';
import { Nota } from './notas.entity';
import { MateriaDocente } from './materias_docentes.entity';
import { MateriaPlanEstudio } from './materias_plan_estudio.entity';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn('uuid')
  idMateria: string;

  @Column({ unique: true })
  nombre: string; // Matemática, Castellano, Biología

  @Column({ nullable: true })
  descripcion?: string;

  @OneToMany(() => MateriaPlanEstudio, mpe => mpe.materia)
  materiaPlanEstudios: MateriaPlanEstudio[];

  @OneToMany(() => MateriaDocente, md => md.materia)
  materiasDocentes: MateriaDocente[];
}
