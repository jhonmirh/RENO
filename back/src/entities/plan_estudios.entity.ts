import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MateriaPlanEstudio } from './materias_plan_estudio.entity';
import { Institucion } from './instituciones.entity';

@Entity('planes_estudio')
export class PlanEstudio {

  @PrimaryGeneratedColumn('uuid')
  idPlanEstudio: string;

  /* =======================
     RELACIÓN INSTITUCIÓN
     ======================= */

  @Column({ name: 'id_institucion' })
  idInstitucion: string;

  @ManyToOne(() => Institucion)
  @JoinColumn({ name: 'id_institucion' })
  institucion: Institucion;

  /* =======================
     DATOS DEL PLAN
     ======================= */

  @Column()
  nombre: string;
  // Ej: Educación Media General

  @Column()
  nivel: string;
  // Media, Básica, Técnica

  @Column({ name: 'cantidad_grados' })
  cantidadGrados: number;
  // 5 o 6

  /* =======================
     RELACIONES
     ======================= */

  @OneToMany(() => MateriaPlanEstudio, mpe => mpe.planEstudio)
  materiaPlanEstudios: MateriaPlanEstudio[];
}
