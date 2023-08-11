import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Delete } from '@nestjs/common';
@Entity()
export class Category {
  @Column({ type: 'number' })
  parentId: number;

  @Column({ type: 'number' })
  order: number;
  @Column({ length: 50, type: 'string' })
  name: string;
  @Column({ length: 300, type: 'string' })
  icon: string;
  @Column()
  active: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
