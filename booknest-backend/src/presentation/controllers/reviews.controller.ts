import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReviewService } from 'src/application/services/review.service';
import { CreateReviewDto } from 'src/application/dto/create-review.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  @ApiOperation({ summary: 'Get all reviews' })
  @ApiResponse({ status: 200, description: 'Return all reviews' })
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a review by ID' })
  @ApiParam({ name: 'id', description: 'Review ID' })
  @ApiResponse({ status: 200, description: 'Return the review' })
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @Get('/master/:masterId')
  @ApiOperation({ summary: 'Get reviews by master ID' })
  @ApiParam({ name: 'masterId', description: 'Master ID' })
  @ApiResponse({ status: 200, description: 'Return reviews for the master' })
  findByMasterId(@Param('masterId') masterId: string) {
    return this.reviewService.findByMasterId(parseInt(masterId));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new review' })
  @ApiResponse({ status: 201, description: 'The review has been created' })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a review by ID' })
  @ApiParam({ name: 'id', description: 'Review ID' })
  @ApiResponse({ status: 200, description: 'The review has been deleted' })
  delete(@Param('id') id: string) {
    return this.reviewService.delete(id);
  }
}
