import { Setting } from '../entities/setting.entity';

export interface ISettingsRepository {
  findAll(): Promise<Setting[]>;
  findOne(id: number): Promise<Setting>;
  findByKey(key: string): Promise<Setting | null>;
  create(setting: Setting): Promise<Setting>;
  remove(id: number): Promise<void>;
}
