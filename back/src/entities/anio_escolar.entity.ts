import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { PlanEstudio } from './plan_estudios.entity';
import { Institucion } from './instituciones.entity';
import { Dependencia } from './dependencia.entity';
import { MomentoPedagogico } from './momentos_pedagogicos.entity';

@Entity('ano_escolar')
export class AnoEscolar {

  @PrimaryGeneratedColumn('uuid')
  idAnoEscolar: string;

  /* =======================
     RELACIÓN INSTITUCIÓN
     ======================= */

  @Column({ name: 'id_institucion' })
  idInstitucion: string;

  @ManyToOne(() => Institucion)
  @JoinColumn({ name: 'id_institucion' })
  institucion: Institucion;

  /* =======================
     RELACIÓN DEPENDENCIA
     ======================= */

  @Column({ name: 'codigo_dependencia' })
  codigoDependencia: number;

  @ManyToOne(() => Dependencia)
  @JoinColumn({ name: 'codigo_dependencia' })
  dependencia: Dependencia;

  /* =======================
     DATOS DEL AÑO ESCOLAR
     ======================= */

  @Column({ name: 'nombre_ano' })
  nombreAno: string;
  // Ej: 2025-2026

  @Column({ nullable: true })
  observaciones?: string;

  /* =======================
     PLAN DE ESTUDIO
     ======================= */

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;

  /* =======================
     RELACIONES
     ======================= */

  @OneToMany(() => MomentoPedagogico, mp => mp.anoEscolar)
  momentosPedagogicos: MomentoPedagogico[];
}
