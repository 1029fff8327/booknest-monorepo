import { Module } from '@nestjs/common';
import { Setting } from './domain/entities/setting.entity';
import { SettingsController } from './presentation/controllers/settings.controller';
import { SettingsService } from './application/services/settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [SettingsService],
  controllers: [SettingsController],
})
export class SettingsModule {}
