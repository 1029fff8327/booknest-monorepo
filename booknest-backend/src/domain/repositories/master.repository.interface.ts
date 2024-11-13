import { Master } from '../entities/master.entity';

export interface IMasterRepository {
  findAll(): Promise<Master[]>;
  findOne(id: string): Promise<Master>;
  create(master: Master): Promise<Master>;
  update(master: Master): Promise<Master>;
  delete(id: string): Promise<void>;
}
