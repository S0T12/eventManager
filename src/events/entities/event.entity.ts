import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class EventEntity {
  @PrimaryGeneratedColumn({ type: 'number' })
  id: number;

  @Column({ type: 'string' })
  title: string;

  @Column({ type: 'string' })
  description: string;

  @Column({ type: 'string' })
  location: string;

  @Column({ type: 'number' })
  categoryId: number;

  @Column({ type: 'date' })
  eventDate: Date;

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
