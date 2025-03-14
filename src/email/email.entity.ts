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
  subject: string;
  
  @Column()
  to: string;

  @Column()
  message: string;

  @CreateDateColumn()
  sentAt: Date;
}
