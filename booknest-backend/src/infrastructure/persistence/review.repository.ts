import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IReviewRepository } from 'src/domain/repositories/review.repository.interface';
import { Review } from 'src/domain/entities/review.entity';

@Injectable()
export class ReviewRepository implements IReviewRepository {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find();
  }

  findOne(id: string): Promise<Review> {
    return this.reviewsRepository.findOne({ where: { id: parseInt(id) } });
  }

  findByMasterId(masterId: number): Promise<Review[]> {
    return this.reviewsRepository.find({ where: { masterId } });
  }

  async create(review: Review): Promise<Review> {
    return this.reviewsRepository.save(review);
  }

  async delete(id: string): Promise<void> {
    await this.reviewsRepository.delete(id);
  }
}
