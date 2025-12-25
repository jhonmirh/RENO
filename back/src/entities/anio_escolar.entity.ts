import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PlanEstudio } from './plan_estudios.entity';


@Entity('ano_escolar')
export class AnoEscolar {
  @PrimaryGeneratedColumn({ name: 'id_ano_escolar' })
  idAnoEscolar: number;

  @Column({ name: 'nombre_ano' })
  nombreAno: string;

  @Column()
  observaciones: string;

  @ManyToOne(() => PlanEstudio)
  @JoinColumn({ name: 'id_plan_estudio' })
  planEstudio: PlanEstudio;
}