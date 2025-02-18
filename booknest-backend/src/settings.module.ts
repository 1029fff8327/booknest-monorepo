import { Module } from '@nestjs/common';
import { Setting } from './domain/entities/setting.entity';
import { SettingsController } from './presentation/controllers/settings.controller';
import { SettingsRepository } from '../src/infrastructure/persistence/settings.repository';
import { SettingsRepositoryToken } from 'src/constants';
import { SettingsService } from './application/services/settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [
    SettingsService,
    {
      provide: SettingsRepositoryToken,
      useClass: SettingsRepository,
    },
  ],
  controllers: [SettingsController],
})
export class SettingsModule {}
