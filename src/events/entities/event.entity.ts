import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn({ type: 'number' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  location: string;

  @ManyToOne(() => CategoryEntity, (category) => category.events)
  categoryId: CategoryEntity;

  @Column({ type: 'date' })
  eventDate: Date;

  @ManyToOne(() => UserEntity, (user) => user.events)
  userId: UserEntity;

  @Column({ type: 'boolean' })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
