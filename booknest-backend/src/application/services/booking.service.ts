import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IBookingRepository } from 'src/domain/repositories/booking.repository.interface';
import { CreateBookingDto } from '../dto/booking/create-booking.dto';
import { UpdateBookingDto } from '../dto/booking/update-booking.dto';
import { Booking } from 'src/domain/entities/booking.entity';
import { BookingRepositoryToken } from 'src/constants';

@Injectable()
export class BookingService {
  constructor(
    @Inject(BookingRepositoryToken)
    private readonly bookingRepository: IBookingRepository,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.findAll();
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = new Booking();
    booking.name = createBookingDto.name;
    booking.email = createBookingDto.email;
    booking.masterName = createBookingDto.masterName;
    booking.service = createBookingDto.service;
    booking.date = createBookingDto.date;
    booking.time = createBookingDto.time;
    return this.bookingRepository.create(booking);
  }

  async update(
    id: string,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    const booking = await this.bookingRepository.findOne(id);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    booking.name = updateBookingDto.name;
    booking.email = updateBookingDto.email;
    booking.date = updateBookingDto.date;
    booking.time = updateBookingDto.time;
    return this.bookingRepository.update(booking);
  }

  async delete(id: string): Promise<void> {
    const booking = await this.bookingRepository.findOne(id);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    await this.bookingRepository.delete(id);
  }
}
