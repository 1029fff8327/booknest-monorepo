import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the reviewer' })
  name: string;

  @ApiProperty({
    example: 5,
    description: 'The rating given by the reviewer',
    minimum: 1,
    maximum: 5,
  })
  rating: number;

  @ApiProperty({ example: 'Great service!', description: 'The review comment' })
  comment: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the master being reviewed',
    required: false,
  })
  masterId?: number;
}
