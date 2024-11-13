import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShopSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  domain: string;

  @Column()
  shopName: string;
}
export default ShopSettings;
