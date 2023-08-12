import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { EventEntity } from '../../events/entities/event.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  icon: string;

  @Column({ type: 'integer' })
  order: number;

  @ManyToOne(() => CategoryEntity, { nullable: true })
  parent: CategoryEntity;

  @OneToMany(() => CategoryEntity, (category) => category.parent)
  subcategories: CategoryEntity[];

  @Column({ type: 'boolean' })
  active: boolean;

  @OneToMany(() => EventEntity, (event) => event.categoryId)
  events: EventEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
