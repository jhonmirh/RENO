import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, OneToMany } from 'typeorm';
import { Escolaridad } from './escolaridad.entity';
import { MateriaPlanEstudio } from './materias_plan_estudio.entity';
import { Nota } from './notas.entity';
import { Definitiva } from './definitivas.entity';

@Entity('escolaridad_materias')
@Unique(['escolaridad', 'materiaPlanEstudio'])
export class EscolaridadMateria {

  @PrimaryGeneratedColumn('uuid')
  idEscolaridadMateria: string;

  @ManyToOne(() => Escolaridad)
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: Escolaridad;

  @ManyToOne(() => MateriaPlanEstudio)
  @JoinColumn({ name: 'id_materia_plan' })
  materiaPlanEstudio: MateriaPlanEstudio;

  @Column({ default: false })
  esPendiente: boolean;

  @Column({ default: false })
  esRepetida: boolean;

  @OneToMany(() => Nota, nota => nota.escolaridadMateria)
  notas: Nota[];

  @OneToMany(() => Definitiva, def => def.escolaridadMateria)
  definitivas: Definitiva[];
}
