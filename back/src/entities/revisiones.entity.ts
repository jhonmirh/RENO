import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Definitiva } from './definitivas.entity';

@Entity('revisiones')
export class Revision {
  
  @PrimaryGeneratedColumn('uuid')
  idRevisionDefinitiva: string;

  @Column({ name: 'numero_intento' })
  numeroIntento: number;

  @Column()
  nota: number;

  @Column()
  fecha: Date;

  @Column({ name: 'estado_final' })
  estadoFinal: string;

  @ManyToOne(() => Definitiva)
  @JoinColumn({ name: 'id_definitiva' })
  definitiva: Definitiva;
}
