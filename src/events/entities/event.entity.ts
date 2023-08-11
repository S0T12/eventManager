import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { CategoryEntity } from '../../categories/entities/category.entity';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn({ type: 'number' })
  id: number;

  @Column({ type: 'string' })
  title: string;

  @Column({ type: 'string' })
  description: string;

  @Column({ type: 'string' })
  location: string;

  @ManyToOne(
    () => CategoryEntity,
    (category) => {
      category.id;
    },
  )
  @Column({ type: 'number' })
  categoryId: number;

  @Column({ type: 'date' })
  eventDate: Date;

  @ManyToOne(
    () => UserEntity,
    (user) => {
      user.id;
    },
  )
  @Column({ type: 'number' })
  userId: number;

  @Column({ type: 'boolean' })
  active: boolean;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date' })
  updateAt: Date;

  @DeleteDateColumn({ type: 'date' })
  deletedAt: Date;
}
