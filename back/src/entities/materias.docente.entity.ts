import { Entity, PrimaryColumn } from 'typeorm';

@Entity('materia_docentes')
export class MateriaDocente {
  @PrimaryColumn({ name: 'id_cedula_docente' })
  idCedulaDocente: string;

  @PrimaryColumn({ name: 'id_materia' })
  idMateria: number;
}
