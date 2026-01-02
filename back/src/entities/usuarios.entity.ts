import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Institucion } from './instituciones.entity';

export enum RolUsuario {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN_INSTITUCION = 'ADMIN_INSTITUCION',
  DOCENTE = 'DOCENTE',
  CONTROL_ESTUDIO = 'CONTROL_ESTUDIO',
}

@Entity('usuarios')
export class Usuario {

  @PrimaryGeneratedColumn('uuid')
  idUsuario: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; // bcrypt

  @Column({
    type: 'enum',
    enum: RolUsuario,
  })
  rol: RolUsuario;

  @Column({ default: true })
  activo: boolean;

  /* =====================
     RELACIÓN INSTITUCIÓN
     ===================== */

  @Column({ name: 'id_institucion' })
  idInstitucion: string;

  @ManyToOne(() => Institucion)
  @JoinColumn({ name: 'id_institucion' })
  institucion: Institucion;

  /* =====================
     RELACIONES OPCIONALES
     ===================== */

  @Column({ name: 'id_cedula_docente', nullable: true })
  idCedulaDocente?: string;
}
