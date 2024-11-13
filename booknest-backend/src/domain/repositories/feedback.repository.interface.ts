import { Feedback } from '../entities/feedback.entity';

export interface IFeedbackRepository {
  create(feedback: Feedback): Promise<Feedback>;
  findAll(): Promise<Feedback[]>;
}
