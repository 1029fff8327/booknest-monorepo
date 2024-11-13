import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { BookingService } from 'src/application/services/booking.service';
import { CreateBookingDto } from 'src/application/dto/booking/create-booking.dto';
import { UpdateBookingDto } from 'src/application/dto/booking/update-booking.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingService: BookingService) {}

  @Get('Get-all')
  @ApiOperation({ summary: 'Get all bookings' })
  @ApiResponse({ status: 200, description: 'Return all bookings' })
  findAll() {
    return this.bookingService.findAll();
  }

  @Get('Get-by-id')
  @ApiOperation({ summary: 'Get a booking by ID' })
  @ApiParam({ name: 'id', description: 'Booking ID' })
  @ApiResponse({ status: 200, description: 'Return the booking' })
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(id);
  }

  @Post('Create')
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({ status: 201, description: 'The booking has been created' })
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Put('Update-by-id/:id')
  @ApiOperation({ summary: 'Update a booking by ID' })
  @ApiParam({ name: 'id', description: 'Booking ID' })
  @ApiResponse({ status: 200, description: 'The booking has been updated' })
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(id, updateBookingDto);
  }

  @Delete('Delete-by-id/:id')
  @ApiOperation({ summary: 'Delete a booking by ID' })
  @ApiParam({ name: 'id', description: 'Booking ID' })
  @ApiResponse({ status: 200, description: 'The booking has been deleted' })
  @ApiResponse({ status: 404, description: 'Booking not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async delete(@Param('id') id: string) {
    try {
      console.log(`Attempting to delete booking with id: ${id}`);
      await this.bookingService.delete(id);
      console.log(`Successfully deleted booking with id: ${id}`);
    } catch (error) {
      console.error(`Failed to delete booking with id: ${id}`, error);
      throw new InternalServerErrorException('Could not delete booking');
    }
  }
}
