import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopSettings } from 'src/domain/entities/shop-settings.entity';
import { IShopSettingsRepository } from 'src/domain/repositories/shop-settings.repository.interface';

@Injectable()
export class ShopSettingsRepository implements IShopSettingsRepository {
  constructor(
    @InjectRepository(ShopSettings)
    private shopSettingsRepository: Repository<ShopSettings>,
  ) {}

  async findOne(): Promise<ShopSettings> {
    const settings = await this.shopSettingsRepository.find();
    return settings.length ? settings[0] : null;
  }

  async create(shopSettings: ShopSettings): Promise<ShopSettings> {
    return this.shopSettingsRepository.save(shopSettings);
  }

  async update(shopSettings: ShopSettings): Promise<ShopSettings> {
    return this.shopSettingsRepository.save(shopSettings);
  }

  async delete(id: number): Promise<void> {
    await this.shopSettingsRepository.delete(id);
  }
}
