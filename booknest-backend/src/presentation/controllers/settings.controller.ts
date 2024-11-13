import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SettingsService } from 'src/application/services/settings.service';
import { Setting } from 'src/domain/entities/setting.entity';
import { CreateSettingDto } from 'src/application/dto/create-setting.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @ApiOperation({ summary: 'Получить все настройки' })
  @ApiResponse({ status: 200, description: 'Возвращает все настройки.' })
  @Get()
  findAll(): Promise<Setting[]> {
    return this.settingsService.findAll();
  }

  @ApiOperation({ summary: 'Получить настройку по ID' })
  @ApiResponse({ status: 200, description: 'Возвращает настройку.' })
  @ApiResponse({ status: 404, description: 'Настройка не найдена.' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Setting> {
    return this.settingsService.findOne(parseInt(id, 10));
  }

  @ApiOperation({ summary: 'Создать новую настройку' })
  @ApiResponse({ status: 201, description: 'Настройка успешно создана.' })
  @Post()
  create(@Body() createSettingDto: CreateSettingDto): Promise<Setting> {
    return this.settingsService.create(createSettingDto);
  }

  @ApiOperation({ summary: 'Удалить настройку по ID' })
  @ApiResponse({ status: 200, description: 'Настройка успешно удалена.' })
  @ApiResponse({ status: 404, description: 'Настройка не найдена.' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.settingsService.remove(parseInt(id, 10));
  }
}
