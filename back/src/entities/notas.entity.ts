import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('notas')
export class Nota {
  @PrimaryGeneratedColumn('uuid')
  idNotas: string;

  @ManyToOne('Materia')
  @JoinColumn({ name: 'id_materia' })
  materia: any;

  @ManyToOne('Escolaridad')
  @JoinColumn({ name: 'id_escolaridad' })
  escolaridad: any;

  @ManyToOne('MomentoPedagogico')
  @JoinColumn({ name: 'id_momento' })
  momento: any;

  @Column({ name: 'numero_forma' })
  numeroForma: number;

  @Column()
  nota: number;
}
