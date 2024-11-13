import { Master } from './domain/entities/master.entity';
import { MasterRepository } from './infrastructure/persistence/master.repository';
import { MasterRepositoryToken } from './constants'; // Импортируем токен
import { MasterService } from './application/services/masters.service';
import { MastersController } from './presentation/controllers/masters.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Master])],
  providers: [
    MasterService,
    {
      provide: MasterRepositoryToken, // Используем токен
      useClass: MasterRepository,
    },
  ],
  controllers: [MastersController],
  exports: [MasterRepositoryToken], // Экспортируем токен, если он понадобится в других модулях
})
export class MastersModule {}
