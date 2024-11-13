import { Review } from '../entities/review.entity';

export interface IReviewRepository {
  findAll(): Promise<Review[]>;
  findOne(id: string): Promise<Review>;
  create(review: Review): Promise<Review>;
  delete(id: string): Promise<void>;
}
