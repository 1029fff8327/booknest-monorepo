import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  masterName: string;

  @Column()
  service: string;

  @Column()
  date: string;

  @Column()
  time: string;
}
