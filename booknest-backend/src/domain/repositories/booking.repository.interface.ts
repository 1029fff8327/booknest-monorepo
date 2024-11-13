import { Booking } from '../entities/booking.entity';

export interface IBookingRepository {
  findAll(): Promise<Booking[]>;
  findOne(id: string): Promise<Booking>;
  create(booking: Booking): Promise<Booking>;
  update(booking: Booking): Promise<Booking>;
  delete(id: string): Promise<void>;
}
