import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Dependencia } from './dependencia.entity';
import { MateriaDocente } from './materias_docentes.entity';
@Entity('docentes')
export class Docente {
  @PrimaryColumn({ name: 'id_cedula_docente' })
  idCedulaDocente: string;

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

    @Column()
    ced_madre: string;

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
    tiene_vivienda_propia: boolean;

    @Column()
    tipo_vivienda: string;

    @Column()
    necesidad_vivienda_mejoras: string;

    @Column()
    tiene_carro: boolean;

    @Column()
    tiene_moto: boolean;

    @Column()
    placa_vehiculo: string;

    @Column()
    placa_moto: string;

    @Column()
    estatura: string;

    @Column()
    peso: string;

    @Column()
    nivel_instruccion: string;

    @Column()
    titulo_obtenido_pregrado: string;

    @Column()
    titulo_obtenido_postgrado_especializacion: string;

    @Column()
    titulo_obtenido_postgrado_especializacion2: string;

    @Column()
    titulo_obtenido_postgrado_maestria: string;

    @Column()
    titulo_obtenido_postgrado_maestria2: string;

    @Column()
    titulo_obtenido_postgrado_doctorado: string;

    @Column()
    titulo_obtenido_postgrado_phd: string;
 
    @Column()
    codigoDependencia: string;

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

    @Column()
    foto_docente: string;

    @Column()
    banco_ctaNomina: string;

    @Column()
    numero_ctaNomina: string;

    @Column()
    tipo_ctaNomina: string;

@OneToMany(() => Dependencia, dependencia => dependencia.codigoDependencia)
dependencias: Dependencia[];

@OneToMany(() => MateriaDocente, md => md.docente)
materiasDocentes: MateriaDocente[];

}
