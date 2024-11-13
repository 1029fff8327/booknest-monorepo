import { Injectable, Inject } from '@nestjs/common';
import { Setting } from 'src/domain/entities/setting.entity';
import { ISettingsRepository } from 'src/domain/repositories/settings.repository.interface';
import { CreateSettingDto } from '../dto/create-setting.dto';
import { SettingsRepositoryToken } from 'src/constants';

@Injectable()
export class SettingsService {
  constructor(
    @Inject(SettingsRepositoryToken)
    private readonly settingsRepository: ISettingsRepository,
  ) {}

  findAll(): Promise<Setting[]> {
    return this.settingsRepository.findAll();
  }

  findOne(id: number): Promise<Setting> {
    return this.settingsRepository.findOne(id);
  }

  create(createSettingDto: CreateSettingDto): Promise<Setting> {
    const setting = new Setting();
    setting.key = createSettingDto.key;
    setting.value = createSettingDto.value;

    return this.settingsRepository.create(setting);
  }

  async remove(id: number): Promise<void> {
    await this.settingsRepository.remove(id);
  }
}
