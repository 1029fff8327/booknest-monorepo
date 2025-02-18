import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SettingsService } from 'src/application/services/settings.service';
import { Setting } from 'src/domain/entities/setting.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @ApiOperation({ summary: 'Получить все настройки (JSON)' })
  @ApiResponse({ status: 200, description: 'Возвращает объект настроек.' })
  @Get()
  async getGlobalSettings(): Promise<any> {
    const setting = await this.settingsService.findByKey('globalSettings');
    return setting ? JSON.parse(setting.value) : {};
  }

  @ApiOperation({ summary: 'Создать или обновить глобальные настройки' })
  @ApiResponse({ status: 201, description: 'Настройки сохранены.' })
  @Post()
  async createOrUpdate(@Body() data: any): Promise<any> {
    const savedSetting: Setting =
      await this.settingsService.createOrUpdateGlobal(data);
    return JSON.parse(savedSetting.value);
  }

  @ApiOperation({ summary: 'Удалить настройку по ID' })
  @ApiResponse({ status: 200, description: 'Настройка успешно удалена.' })
  @ApiResponse({ status: 404, description: 'Настройка не найдена.' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.settingsService.remove(parseInt(id, 10));
  }
}
