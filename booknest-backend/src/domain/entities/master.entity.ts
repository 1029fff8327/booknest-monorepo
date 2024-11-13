import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Master {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  photo: string;

  @Column('simple-array')
  services: string[];
}
