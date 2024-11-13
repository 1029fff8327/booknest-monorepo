import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from 'src/domain/entities/setting.entity';
import { ISettingsRepository } from 'src/domain/repositories/settings.repository.interface';

@Injectable()
export class SettingsRepository implements ISettingsRepository {
  constructor(
    @InjectRepository(Setting)
    private settingsRepository: Repository<Setting>,
  ) {}

  findAll(): Promise<Setting[]> {
    return this.settingsRepository.find();
  }

  findOne(id: number): Promise<Setting> {
    return this.settingsRepository.findOne({ where: { id } });
  }

  create(setting: Setting): Promise<Setting> {
    return this.settingsRepository.save(setting);
  }

  async remove(id: number): Promise<void> {
    await this.settingsRepository.delete(id);
  }
}
