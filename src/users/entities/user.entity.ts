import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string' })
  family: string;

  @Column({ type: 'number' })
  age: number;

  @Column({ type: 'string', unique: true })
  cellphone: string;

  @Column({ type: 'date' })
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
