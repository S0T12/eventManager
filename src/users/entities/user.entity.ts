import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
<<<<<<< HEAD
=======
  Entity,
>>>>>>> 93379fa86e28ddf0b4e03efd59e85a561c8ef2dd
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
<<<<<<< HEAD
import { CategoryEntity } from '../../categories/entities/category.entity';
=======
>>>>>>> 93379fa86e28ddf0b4e03efd59e85a561c8ef2dd
import { EventEntity } from '../../events/entities/event.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  family: string;

  @Column({ type: 'smallint' })
  age: number;

  @Column({ type: 'varchar', unique: true })
  cellphone: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ type: 'boolean' })
  active: boolean;

  @OneToMany(() => EventEntity, (event) => event.userId)
  events: EventEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
