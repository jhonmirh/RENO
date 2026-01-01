import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('instituciones')
export class Institucion {

  @PrimaryGeneratedColumn('uuid')
  idInstitucion: string;

  /* =======================
     Códigos oficiales
     ======================= */

  @Column({ name: 'codigo_dependencia', type: 'bigint', unique: true })
  codigoDependencia: number;
  // Solo números

  @Column({ name: 'codigo_plantel', unique: true })
  codigoPlantel: string;
  // Números + letras

  @Column({ name: 'codigo_estadistico', type: 'bigint', unique: true })
  codigoEstadistico: number;
  // Solo números

  @Column({ name: 'codigo_sica', type: 'bigint', unique: true })
  codigoSica: number;
  // Solo números

  /* =======================
     Datos generales
     ======================= */

  @Column()
  nombre: string;

  @Column()
  tipo: string;
  // Liceo, Escuela, Técnico, etc.

  @Column()
  estado: string;

  @Column()
  municipio: string;

  @Column()
  parroquia: string;

  @Column()
  direccion: string;

  @Column({ nullable: true })
  telefono?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ default: true })
  activo: boolean;

  /* =======================
     Auditoría
     ======================= */

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

  /* =======================
     Relaciones (luego)
     ======================= */

  // @OneToMany(() => Estudiante, e => e.institucion)
  // estudiantes: Estudiante[];

  // @OneToMany(() => Docente, d => d.institucion)
  // docentes: Docente[];

  // @OneToMany(() => Usuario, u => u.institucion)
  // usuarios: Usuario[];

  // @OneToMany(() => AnoEscolar, a => a.institucion)
  // anosEscolares: AnoEscolar[];

