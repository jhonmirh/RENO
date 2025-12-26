import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('referencia_personal')
export class ReferenciaPersonal {
  @PrimaryColumn({ name: 'id_cedula_referencia' })
  idCedulaReferencia: string;

    @Column()
    telefono: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    relacion: string;

    @Column()
    direccion: string;

    @Column()
    ocupacion: string;

    @Column()
    lugar_trabajo: string;
}
