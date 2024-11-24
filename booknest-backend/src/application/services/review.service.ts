import { Injectable, Inject } from '@nestjs/common';
import { IReviewRepository } from 'src/domain/repositories/review.repository.interface';
import { CreateReviewDto } from '../dto/create-review.dto';
import { Review } from 'src/domain/entities/review.entity';
import { ReviewRepositoryToken } from 'src/constants';

@Injectable()
export class ReviewService {
  constructor(
    @Inject(ReviewRepositoryToken)
    private readonly reviewRepository: IReviewRepository,
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewRepository.findAll();
  }

  findOne(id: string): Promise<Review> {
    return this.reviewRepository.findOne(id);
  }

  findByMasterId(masterId: number): Promise<Review[]> {
    return this.reviewRepository.findByMasterId(masterId);
  }

  create(createReviewDto: CreateReviewDto): Promise<Review> {
    const review = new Review();
    review.name = createReviewDto.name;
    review.rating = createReviewDto.rating;
    review.comment = createReviewDto.comment;
    review.masterId = createReviewDto.masterId || null; // Указываем masterId, если есть
    return this.reviewRepository.create(review);
  }

  delete(id: string): Promise<void> {
    return this.reviewRepository.delete(id);
  }
}
