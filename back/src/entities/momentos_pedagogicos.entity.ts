import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AnoEscolar } from './anio_escolar.entity';

@Entity('momentos_pedagogicos')
export class MomentoPedagogico {
  
  @PrimaryGeneratedColumn('uuid')
  idMomento: string;

  @Column({ name: 'nombre_momento' })
  nombreMomento: string;

  @ManyToOne(() => AnoEscolar)
  @JoinColumn({ name: 'id_ano_escolar' })
  anoEscolar: AnoEscolar;
}
