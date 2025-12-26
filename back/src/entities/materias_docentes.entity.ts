import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Materia } from './materias.entity';
import { Docente } from './docentes.entity';

@Entity('materias_docentes')
export class MateriaDocente {
  
  @PrimaryColumn({ name: 'id_materia' })
  idMateria: string;

  @PrimaryColumn({ name: 'id_cedula_docente' })
  idCedulaDocente: string;

  @ManyToOne(() => Materia, m => m.materiasDocentes)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @ManyToOne(() => Docente, d => d.materiasDocentes)
  @JoinColumn({ name: 'id_cedula_docente' })
  docente: Docente;
}
