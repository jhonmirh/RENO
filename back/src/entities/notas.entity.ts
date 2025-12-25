import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Materia } from './materias.entity';
import { Escolaridad } from './escolaridad.entity';
import { MomentoPedagogico } from './momentos_pedagogicos.entity';

@Entity('notas')
export class Nota {
  @PrimaryGeneratedColumn({ name: 'id_notas' })
  idNotas: number;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia' })
  materia: Materia;

  @ManyToOne(() => Escolaridad)
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: Escolaridad;

  @ManyToOne(() => MomentoPedagogico)
  @JoinColumn({ name: 'id_momento' })
  momento: MomentoPedagogico;

  @Column({ name: 'numero_forma' })
  numeroForma: number;

  @Column()
  nota: number;
}
