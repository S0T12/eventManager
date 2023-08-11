import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { EventEntity } from '../../events/entities/event.entity';
@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  parentId: number;

  @Column({ type: 'number' })
  order: number;

  @Column({ length: 50, type: 'string' })
  name: string;

  @OneToMany(
    () => EventEntity,
    (event) => {
      event.id;
    },
  )
  category: number;

  @Column({ length: 300, type: 'string' })
  icon: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
