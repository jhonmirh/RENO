# RENO SISTEMA DE REGISTRO ESCOLAR DE NOTAS Y GESTION ESCOLAR

Monorepo con:
- Backend: NestJS
- Frontend: NextJS

## Instalación

### Backend
cd backend
npm install
npm run start:dev

### Frontend
cd frontend
npm install
npm run dev




// ==============================
// SISTEMA RENO – ENTIDADES, ENUMS Y DTOs
// ==============================

// ------------------------------
// ENUMS
// ------------------------------

export enum TipoEvaluacion {
  FINAL = 'FINAL',
  REVISION = 'REVISION',
  MATERIA_PENDIENTE = 'MATERIA_PENDIENTE',
}

export enum EstadoAcademico {
  APROBADO = 'APROBADO',
  REPROBADO = 'REPROBADO',
}

export enum CondicionEscolaridad {
  REGULAR = 'REGULAR',
  REPITIENTE = 'REPITIENTE',
  MATERIA = 'MATERIA',
  PENDIENTE = 'PENDIENTE',
  RETIRADO = 'RETIRADO',
  INACTIVO = 'INACTIVO',
}

// ------------------------------
// ENTIDADES
// ------------------------------

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, Unique, Index } from 'typeorm';

// ----- Año Escolar -----
@Entity('ano_escolar')
export class AnoEscolar {
  @PrimaryGeneratedColumn('uuid')
  idAnoEscolar: string;

  @Index({ unique: true })
  @Column({ name: 'nombre_ano', length: 9 })
  nombreAno: string; // ej: 2025-2026

  @Column({ nullable: true })
  observaciones?: string;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;
}

// ----- Materia -----
@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn('uuid')
  idMateria: string;

  @Column({ unique: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;
}

// ----- Plan de Estudio -----
@Entity('plan_estudios')
export class PlanEstudio {
  @PrimaryGeneratedColumn('uuid')
  idPlanEstudio: string;

  @Column()
  nombre: string;

  @OneToMany(() => MateriaPlanEstudio, mpe => mpe.planEstudio)
  materiaPlanEstudios: MateriaPlanEstudio[];
}

// ----- MateriaPlanEstudio (intermedia) -----
@Entity('materias_plan_estudio')
export class MateriaPlanEstudio {
  @ManyToOne(() => PlanEstudio, pe => pe.materiaPlanEstudios, { primary: true })
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @ManyToOne(() => Materia, m => m.materiaPlanEstudios, { primary: true })
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @Column({ name: 'grado' })
  grado: string;

  @Column({ name: 'horas_semanales', nullable: true })
  horasSemanales?: number;
}

// ----- Escolaridad -----
@Entity('escolaridad')
export class Escolaridad {
  @PrimaryGeneratedColumn('uuid')
  idEscolaridad: string;

  @Column({ name: 'grado_actual' })
  gradoActual: string;

  @Column({ name: 'seccion_actual' })
  seccionActual: string;

  @Column({ nullable: true })
  mencion?: string;

  @Column({ type: 'date' })
  fechaIngreso: Date;

  @Column({ nullable: true })
  plantelOrigen?: string;

  @Column({ nullable: true })
  estadoPlantelOrigen?: string;

  @Column({ nullable: true })
  municipioPlantelOrigen?: string;

  @Column({ type: 'enum', enum: CondicionEscolaridad })
  condicion: CondicionEscolaridad;

  @ManyToOne(() => Estudiante)
  @JoinColumn({ name: 'id_cedula_estudiante' })
  estudiante: Estudiante;

  @ManyToOne(() => AnoEscolar)
  @JoinColumn({ name: 'id_anio_escolar' })
  anoEscolar: AnoEscolar;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  @OneToMany(() => Nota, nota => nota.escolaridad)
  notas: Nota[];

  @OneToMany(() => Definitiva, def => def.escolaridad)
  definitivas: Definitiva[];
}

// ----- Definitiva -----
@Entity('definitiva')
@Unique(['escolaridad', 'materia'])
export class Definitiva {
  @PrimaryGeneratedColumn('uuid')
  idDefinitiva: string;

  @ManyToOne(() => Escolaridad)
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: Escolaridad;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @Column({ name: 'nota_final', type: 'numeric' })
  notaFinal: number;

  @Column({ type: 'enum', enum: TipoEvaluacion })
  tipoEvaluacion: TipoEvaluacion;

  @Column({ type: 'enum', enum: EstadoAcademico })
  estadoAcademico: EstadoAcademico;
}

// ----- Nota (placeholder, se ajusta luego) -----
@Entity('nota')
export class Nota {
  @PrimaryGeneratedColumn('uuid')
  idNota: string;

  @Column({ type: 'numeric' })
  valor: number;

  @ManyToOne(() => Escolaridad)
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: Escolaridad;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;
}

// ----- Estudiante (placeholder) -----
@Entity('estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn('uuid')
  idEstudiante: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ nullable: true })
  nacionalidad?: string;

  @Column({ nullable: true })
  cedula?: string;

  @OneToMany(() => Escolaridad, e => e.estudiante)
  escolaridades: Escolaridad[];
}

// ==============================
// DTOs – Create y Update
// ==============================

import { IsNotEmpty, IsOptional, IsString, Matches, IsUUID, MaxLength, IsEnum, IsNumber, Min, Max, IsDateString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

// ----- Año Escolar -----
export class CreateAnoEscolarDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-\d{4}$/)
  @MaxLength(9)
  nombreAno: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsNotEmpty()
  @IsUUID()
  idPlanEstudio: string;
}

export class UpdateAnoEscolarDto extends PartialType(CreateAnoEscolarDto) {}

// ----- Definitiva -----
export class CreateDefinitivaDto {
  @IsNotEmpty()
  @IsUUID()
  idEscolaridad: string;

  @IsNotEmpty()
  @IsUUID()
  idMateria: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(20)
  notaFinal: number;

  @IsNotEmpty()
  @IsEnum(TipoEvaluacion)
  tipoEvaluacion: TipoEvaluacion;

  @IsNotEmpty()
  @IsEnum(EstadoAcademico)
  estadoAcademico: EstadoAcademico;
}

export class UpdateDefinitivaDto extends PartialType(CreateDefinitivaDto) {}

// ----- Escolaridad -----
export class CreateEscolaridadDto {
  @IsNotEmpty()
  @IsString()
  gradoActual: string;

  @IsNotEmpty()
  @IsString()
  seccionActual: string;

  @IsOptional()
  @IsString()
  mencion?: string;

  @IsNotEmpty()
  @IsDateString()
  fechaIngreso: Date;

  @IsOptional()
  @IsString()
  plantelOrigen?: string;

  @IsOptional()
  @IsString()
  estadoPlantelOrigen?: string;

  @IsOptional()
  @IsString()
  municipioPlantelOrigen?: string;

  @IsNotEmpty()
  @IsEnum(CondicionEscolaridad)
  condicion: CondicionEscolaridad;

  @IsNotEmpty()
  @IsUUID()
  idEstudiante: string;

  @IsNotEmpty()
  @IsUUID()
  idAnoEscolar: string;

  @IsNotEmpty()
  @IsUUID()
  idPlanEstudio: string;
}

export class UpdateEscolaridadDto extends PartialType(CreateEscolaridadDto) {}
