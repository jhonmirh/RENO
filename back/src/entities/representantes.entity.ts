import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estudiante } from './estudiantes.entity';
import { ReferenciaPersonal } from './referencias-personales.entity';
@Entity('representantes')
export class Representante {

  @PrimaryColumn({ name: 'id_cedula_representante' })
  idCedulaRepresentante: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    direccion: string;

    @Column()
    telefono_fijo: string;

    @Column()
    telefono_movil: string;

    @Column()
    email: string;

    @Column()
    parentesco: string;

    @Column()
    ocupacion: string;

    @Column()
    lugar_trabajo: string;

    @Column()
    telefono_trabajo: string;

    @Column()
    direccion_trabajo: string;

    @Column()
    nivel_escolaridad: string;

    @Column()
    vive_con_estudiante: boolean;

    @Column()
    presenta_autorizacion: boolean;

    @Column()
    descripción_autorizacion: string;

    @Column({ type: 'date', name: 'fecha_nacimiento' })
    fecha_nacimiento: Date;

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
    sexo: string;

    @Column()
    estado_civil: string;

    @Column()
    nacionalidad: string;

    @Column()
    posee_cuentabancaria: boolean;

    @Column()
    nombre_banco: string;

    @Column()
    numero_cuenta_bancaria: string;

    @Column()
    tipo_cuenta_bancaria: string;

    @Column()
    tipo_sangre: string;

    @Column()
    discapacidad: boolean;

    @Column()
    des_discapacidad: string;

    @Column()
    id_cedula_referencia: string;

  @ManyToOne(() => ReferenciaPersonal)
  @JoinColumn({ name: 'id_cedula_referencia' })
  referenciaPersonal: ReferenciaPersonal;

  @OneToMany(() => Estudiante, e => e.representante)
  estudiantes: Estudiante[];
}