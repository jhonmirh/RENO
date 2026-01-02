import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('auditoria_academica')
export class AuditoriaAcademica {

  @PrimaryGeneratedColumn('uuid')
  idAuditoria: string;

  @Column()
  accion: string; // CREAR_NOTA, EDITAR_NOTA, ELIMINAR_NOTA

  @Column({ name: 'id_usuario' })
  idUsuario: string;

  @Column({ name: 'id_estudiante' })
  idEstudiante: string;

  @Column({ name: 'id_materia' })
  idMateria: string;

  @Column({ type: 'json', nullable: true })
  detalle: any;

  @CreateDateColumn()
  fecha: Date;
}
