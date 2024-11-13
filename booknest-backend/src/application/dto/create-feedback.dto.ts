import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty({
    description: 'User feedback',
    example: 'Great service!',
  })
  @IsString()
  @IsNotEmpty()
  feedback: string;
}
