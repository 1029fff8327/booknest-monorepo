import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Feedback } from '../../domain/entities/feedback.entity';
import { IFeedbackRepository } from '../../domain/repositories/feedback.repository.interface';
import { FeedbackRepositoryToken } from '../../constants';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @Inject(FeedbackRepositoryToken)
    private readonly feedbackRepository: IFeedbackRepository,
  ) {}

  create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = new Feedback();
    feedback.feedback = createFeedbackDto.feedback;
    return this.feedbackRepository.create(feedback);
  }

  findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.findAll();
  }
}
