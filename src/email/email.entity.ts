import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  subject: string;

  @Column()
  body: string;
}
