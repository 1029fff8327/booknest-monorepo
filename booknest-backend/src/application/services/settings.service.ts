import { Injectable, Inject } from '@nestjs/common';
import { Setting } from 'src/domain/entities/setting.entity';
import { ISettingsRepository } from 'src/domain/repositories/settings.repository.interface';
import { SettingsRepositoryToken } from 'src/constants'; // Импортируем токен

@Injectable()
export class SettingsService {
  constructor(
    @Inject(SettingsRepositoryToken)
    private readonly settingsRepository: ISettingsRepository,
  ) {}

  async findAll(): Promise<Setting[]> {
    return this.settingsRepository.findAll();
  }

  async findByKey(key: string): Promise<Setting | null> {
    return this.settingsRepository.findByKey(key);
  }

  async createOrUpdateGlobal(data: any): Promise<Setting> {
    const KEY = 'globalSettings';
    const existing = await this.settingsRepository.findByKey(KEY);

    const jsonString = JSON.stringify(data);

    if (!existing) {
      const newSetting = new Setting();
      newSetting.key = KEY;
      newSetting.value = jsonString;
      return this.settingsRepository.create(newSetting);
    } else {
      existing.value = jsonString;
      return this.settingsRepository.create(existing);
    }
  }

  async remove(id: number): Promise<void> {
    await this.settingsRepository.remove(id);
  }
}
