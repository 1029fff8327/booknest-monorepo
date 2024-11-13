import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from '../../domain/entities/feedback.entity';
import { IFeedbackRepository } from '../../domain/repositories/feedback.repository.interface';

@Injectable()
export class FeedbackRepository implements IFeedbackRepository {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  create(feedback: Feedback): Promise<Feedback> {
    return this.feedbackRepository.save(feedback);
  }

  findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }
}
