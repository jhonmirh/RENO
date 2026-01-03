import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Institucion } from './instituciones.entity';

@Entity('dependencias')
export class Dependencia {

  @PrimaryColumn({ name: 'codigo_dependencia', type: 'int' })
  codigoDependencia: number;  // Aquí aseguramos que sea integer

  @Column({ name: 'nombre_dependencia', type: 'varchar' })
  nombreDependencia: string;  // Aquí aseguramos que sea string
  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  estado: string;

  @Column()
  municipio: string;

  @Column()
  parroquia: string;

  /* =======================
     RELACIÓN CON INSTITUCIÓN
     ======================= */

  @Column({ name: 'id_institucion' })
  idInstitucion: string;

  @ManyToOne(() => Institucion)
  @JoinColumn({ name: 'id_institucion' })
  institucion: Institucion;
}
