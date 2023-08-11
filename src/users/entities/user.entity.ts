import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class User {
  @Column({ type: 'string' })
  name: string;
  @Column({ type: 'string' })
  family: string;

  @Column({ type: 'number' })
  age: number;
  @Column({ type: 'string' })
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
