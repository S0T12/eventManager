import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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
