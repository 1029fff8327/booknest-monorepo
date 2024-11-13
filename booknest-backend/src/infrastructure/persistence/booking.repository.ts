import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBookingRepository } from 'src/domain/repositories/booking.repository.interface';
import { Booking } from 'src/domain/entities/booking.entity';

@Injectable()
export class BookingRepository implements IBookingRepository {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingsRepository.find();
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingsRepository.findOne({ where: { id: parseInt(id) } });
  }

  async create(booking: Booking): Promise<Booking> {
    return this.bookingsRepository.save(booking);
  }

  async update(booking: Booking): Promise<Booking> {
    return this.bookingsRepository.save(booking);
  }

  async delete(id: string): Promise<void> {
    await this.bookingsRepository.delete(id);
  }
}
