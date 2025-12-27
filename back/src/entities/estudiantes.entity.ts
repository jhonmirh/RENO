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
import { Sexo } from '../enums/sexo.enum';
import { Nacionalidad } from '../enums/nacionalidad.enum';
import { EstadoCivil } from '../enums/estado_civil.enum';
import { GrupoSanguineo } from '../enums/GrupoSanguineo.enum';
// Embeddeds para datos familiares
class DatosFamiliar {
  cedula: string;
  nacionalidad: Nacionalidad;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
}

// Embeddeds para tallas
class Tallas {
  camisa: string;
  pantalon: string;
  zapato: string;
}

// Embeddeds para salud
class Salud {
  grupo_sanguineo: GrupoSanguineo;
  alergias: boolean;
  descripcion_alergia?: string;
  discapacidad: boolean;
  descripcion_discapacidad?: string;
  estatura: string;
  peso: string;
}

@Entity('estudiantes')
export class Estudiante {
  @PrimaryColumn({ name: 'id_cedula_estudiante' })
  idCedulaEstudiante: string;

  @Column({ type: 'enum', enum: EstadoCivil })
  estado_civil: EstadoCivil;

  @Column({ type: 'enum', enum: Sexo })
  sexo: Sexo;

  @Column({ type: 'enum', enum: Nacionalidad })
  nacionalidad: string;

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

  // Datos de padres como embeddeds
  @Column({ type: 'json' })
  madre: DatosFamiliar;

  @Column({ type: 'json' })
  padre: DatosFamiliar;

  // Tallas y salud
  @Column({ type: 'json' })
  tallas: Tallas;

  @Column({ type: 'json' })
  salud: Salud;

  @Column({ name: 'id_cedula_representante' })
  idCedulaRepresentante: string;

  @ManyToOne(() => Representante, r => r.estudiantes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_cedula_representante' })
  representante: Representante;

  @OneToMany(() => Escolaridad, e => e.estudiante)
  escolaridades: Escolaridad[];
}
