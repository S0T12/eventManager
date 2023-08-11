import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  parentId: number;

  @Column({ type: 'number' })
  order: number;

  @Column({ type: 'string' })
  name: string;

  @Column()
  category: number;

  @Column({ type: 'string' })
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
