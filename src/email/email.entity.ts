import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  subject: string;

  @Column()
  body: string;

  @CreateDateColumn()
  sentAt: Date;
}
