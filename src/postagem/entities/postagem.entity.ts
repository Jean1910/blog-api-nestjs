import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  texto: string;

  @UpdateDateColumn()
  date: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagens, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  // Indica o lado MUITO do relacionamento, indicando que esse campo se conecta ao campo Postagem da Model Usuario
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
      onDelete: "CASCADE"
  })
  usuario: Usuario
}
