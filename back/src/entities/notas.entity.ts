import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EscolaridadMateria } from './materias_escolaridad.entity';
import { MomentoPedagogico } from './momentos_pedagogicos.entity';
import { Usuario } from './usuarios.entity';
@Entity('notas')
export class Nota {

  @PrimaryGeneratedColumn('uuid')
  idNota: string;

  @ManyToOne(
    () => EscolaridadMateria,
    em => em.notas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'id_escolaridad_materia' })
  escolaridadMateria: EscolaridadMateria;

  @ManyToOne(() => MomentoPedagogico)
  @JoinColumn({ name: 'id_momento' })
  momento: MomentoPedagogico;

  @Column({ name: 'numero_forma', type: 'int' })
  numeroForma: number;

  @Column({ type: 'numeric' })
  nota: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario_registro' })
  usuarioRegistro: Usuario;

  @Column({ name: 'fecha_registro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;

}
