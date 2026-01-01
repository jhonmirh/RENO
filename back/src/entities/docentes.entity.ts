import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Dependencia } from './dependencia.entity';
import { MateriaDocente } from './materias_docentes.entity';
import { Institucion } from './instituciones.entity';

@Entity('docentes')
export class Docente {

  @PrimaryColumn({ name: 'id_cedula_docente' })
  idCedulaDocente: string;

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

  @Column()
  estado_civil: string;

  @Column()
  nacionalidad: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

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
  sexo: string;

  @Column()
  direccion: string;

  @Column()
  telefono_fijo: string;

  @Column()
  telefono_movil: string;

  @Column()
  email: string;

  /* =======================
     DATOS MÉDICOS
     ======================= */

  @Column()
  grupo_sanguineo: string;

  @Column()
  alergias: boolean;

  @Column()
  des_alergia: string;

  @Column()
  discapacidad: boolean;

  @Column()
  des_discapacidad: string;

  /* =======================
     DATOS LABORALES
     ======================= */

  @Column()
  codigoDependencia: string;

  @ManyToOne(() => Dependencia)
  @JoinColumn({ name: 'codigoDependencia' })
  dependencia: Dependencia;

  @Column()
  codigo_cargo: string;

  @Column()
  descripcion_cargo: string;

  @Column()
  estatus_laboral: string;

  @Column()
  fecha_ingreso: Date;

  @Column()
  tiempo_servicio: string;

  @Column()
  codicion_trabajo: string;

  @Column()
  fecha_egreso: Date;

  @Column()
  motivo_egreso: string;

  /* =======================
     VEHÍCULO / OTROS
     ======================= */

  @Column()
  tiene_carro: boolean;

  @Column()
  tiene_moto: boolean;

  @Column()
  placa_vehiculo: string;

  @Column()
  placa_moto: string;

  /* =======================
     FORMACIÓN
     ======================= */

  @Column()
  nivel_instruccion: string;

  @Column()
  titulo_obtenido_pregrado: string;

  @Column()
  titulo_obtenido_postgrado_especializacion: string;

  @Column()
  titulo_obtenido_postgrado_maestria: string;

  @Column()
  titulo_obtenido_postgrado_doctorado: string;

  /* =======================
     RELACIONES
     ======================= */

  @OneToMany(() => MateriaDocente, md => md.docente)
  materiasDocentes: MateriaDocente[];
}
