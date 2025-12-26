import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('dependencias')
export class Dependencia {

    @PrimaryColumn({ name: 'codigo_dependencia' })
    codigoDependencia: string;

    @PrimaryColumn({ name: 'nombre_dependencia' })
    nombreDependencia: string;

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
}