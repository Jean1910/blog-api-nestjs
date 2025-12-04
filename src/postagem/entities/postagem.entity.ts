import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';

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
}
