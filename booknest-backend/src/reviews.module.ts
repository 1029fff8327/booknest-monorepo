import { Module } from '@nestjs/common';
import { Review } from './domain/entities/review.entity';
import { ReviewService } from './application/services/review.service';
import { ReviewsController } from './presentation/controllers/reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
