import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookingDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the person booking',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'The email of the person booking',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '2023-07-01',
    description: 'The date of the booking',
  })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ example: '10:00', description: 'The time of the booking' })
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Invalid time format. Expected format: HH:mm',
  })
  @IsNotEmpty()
  time: string;
}
