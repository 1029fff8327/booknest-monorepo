import { Booking } from './domain/entities/booking.entity';
import { BookingService } from './application/services/booking.service';
import { BookingsController } from './presentation/controllers/bookings.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  providers: [BookingService],
  controllers: [BookingsController],
})
export class BookingsModule {}
