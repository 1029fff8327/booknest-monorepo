import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ShopSettings from 'src/domain/entities/shop-settings.entity';
import { CreateShopSettingsDto } from 'src/application/dto/shop-settings/create-shop-settings.dto';
import { UpdateShopSettingsDto } from 'src/application/dto/shop-settings/update-shop-settings.dto';

@Injectable()
export class ShopSettingsService {
  constructor(
    @InjectRepository(ShopSettings)
    private readonly shopSettingsRepository: Repository<ShopSettings>,
  ) {}

  async findOne(): Promise<ShopSettings> {
    const settings = await this.shopSettingsRepository.find();
    if (!settings.length) {
      throw new NotFoundException('Shop settings not found');
    }
    return settings[0];
  }

  async create(
    createShopSettingsDto: CreateShopSettingsDto,
  ): Promise<ShopSettings> {
    const settings = this.shopSettingsRepository.create(createShopSettingsDto);
    return this.shopSettingsRepository.save(settings);
  }

  async update(
    updateShopSettingsDto: UpdateShopSettingsDto,
  ): Promise<ShopSettings> {
    try {
      const settings = await this.findOne();
      settings.domain = updateShopSettingsDto.domain;
      settings.shopName = updateShopSettingsDto.shopName;
      return await this.shopSettingsRepository.save(settings);
    } catch (error) {
      console.error('Error updating shop settings:', error);
      throw new InternalServerErrorException('Failed to update shop settings');
    }
  }

  async delete(): Promise<void> {
    const settings = await this.findOne();
    await this.shopSettingsRepository.remove(settings);
  }

  async transfer(newAccount: string): Promise<void> {
    // Реализуйте логику переноса магазина на новый аккаунт
  }
}
