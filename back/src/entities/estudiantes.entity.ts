import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Representante } from './representantes.entity';
import { Escolaridad } from './escolaridad.entity';
import { Institucion } from './instituciones.entity';
import { Sexo } from '../enums/sexo.enum';
import { Nacionalidad } from '../enums/nacionalidad.enum';
import { EstadoCivil } from '../enums/estado_civil.enum';
import { GrupoSanguineo } from '../enums/GrupoSanguineo.enum';

@Entity('estudiantes')
export class Estudiante {

  @PrimaryColumn({ name: 'id_cedula_estudiante' })
  idCedulaEstudiante: string;

  /* =======================
     RELACIÓN INSTITUCIÓN
     ======================= */

  @Column({ name: 'id_institucion' })
  idInstitucion: string;

  @ManyToOne(() => Institucion)
  @JoinColumn({ name: 'id_institucion' })
  institucion: Institucion;

  /* =======================
     DATOS PERSONALES
     ======================= */

  @Column({ type: 'enum', enum: EstadoCivil })
  estado_civil: EstadoCivil;

  @Column({ type: 'enum', enum: Sexo })
  sexo: Sexo;

  @Column({ type: 'enum', enum: Nacionalidad })
  nacionalidad: Nacionalidad;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ type: 'date', name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @Column()
  lugar_nacimiento: string;

  @Column()
  municipio_nacimiento: string;

  @Column()
  estado_nacimiento: string;

  @Column()
  parroquia_nacimiento: string;

  @Column()
  pais_nacimiento: string;

  @Column()
  edad: number;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  /* =======================
     REPRESENTANTE
     ======================= */

  @Column({ name: 'id_cedula_representante' })
  idCedulaRepresentante: string;

  @ManyToOne(() => Representante, r => r.estudiantes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_cedula_representante' })
  representante: Representante;

  /* =======================
     ESCOLARIDAD
     ======================= */

  @OneToMany(() => Escolaridad, e => e.estudiante)
  escolaridades: Escolaridad[];
}
