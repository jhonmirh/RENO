import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Representante } from './representantes.entity';
import { Escolaridad } from './escolaridad.entity';

@Entity('estudiantes')
export class Estudiante {
  @PrimaryColumn({ name: 'id_cedula_estudiante' })
  idCedulaEstudiante: string;

    @Column()
    nacionalidad: string;

     @Column()
    estado_civil: string;

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
    sexo: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    email: string;

    @Column()
    ced_madre: string;

    @Column()
    nombre_madre: string;

    @Column()
    apellido_madre: string;

    @Column()
    direccion_madre: string;

    @Column()
    telefono_madre: string;

    @Column()
    ced_padre: string;

    @Column()
    nombre_padre: string;

    @Column()
    apellido_padre: string;

    @Column()
    direccion_padre: string;

    @Column()
    telefono_padre: string;

    @Column()
    talla_camisa: string;

    @Column()
    talla_pantalon: string; 

    @Column()
    talla_zapato: string;

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

    @Column()
    estatura: string;

    @Column()
    peso: string;

    @Column({ name: 'id_cedula_representante' })
    idCedulaRepresentante: string;


  @ManyToOne(() => Representante, r => r.estudiantes)
  @JoinColumn({ name: 'id_cedula_representante' })
  representante: Representante;

  @OneToMany(() => Escolaridad, e => e.estudiante)
  escolaridades: Escolaridad[];
}
