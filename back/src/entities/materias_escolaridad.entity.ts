import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Materia } from './materias.entity';
import { Escolaridad } from './escolaridad.entity';

@Entity('materias_escolaridad')
export class MateriaEscolaridad {
  @PrimaryColumn({ name: 'id_materia' })
  idMateria: string;

  @PrimaryColumn({ name: 'id_escolaridad' })
  idEscolaridad: string;

  @ManyToOne('Materia')
  @JoinColumn({ name: 'id_materia' })
  materia: any;

  @ManyToOne('Escolaridad')
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: any;
}
