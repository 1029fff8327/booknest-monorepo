import { Controller, Get, Post, Body } from '@nestjs/common';
import { FeedbackService } from '../../application/services/feedback.service';
import { CreateFeedbackDto } from '../../application/dto/create-feedback.dto';
import { Feedback } from '../../domain/entities/feedback.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @ApiOperation({ summary: 'Submit feedback' })
  @ApiResponse({ status: 201, description: 'Feedback successfully submitted.' })
  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.create(createFeedbackDto);
  }

  @ApiOperation({ summary: 'Get all feedback' })
  @ApiResponse({ status: 200, description: 'Returns all feedback.' })
  @Get()
  findAll(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }
}
