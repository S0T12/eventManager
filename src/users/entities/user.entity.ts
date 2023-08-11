import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char' })
  username: string;

  @Column({ type: 'char' })
  family: string;

  @Column({ type: 'int2' })
  age: number;

  @Column({ type: 'char', unique: true })
  cellphone: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ type: 'boolean' })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
