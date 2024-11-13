import { ShopSettings } from '../entities/shop-settings.entity';

export interface IShopSettingsRepository {
  findOne(): Promise<ShopSettings>;
  create(shopSettings: ShopSettings): Promise<ShopSettings>;
  update(shopSettings: ShopSettings): Promise<ShopSettings>;
  delete(id: number): Promise<void>;
}
