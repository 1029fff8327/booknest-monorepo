import {
  BookingRepositoryToken,
  FeedbackRepositoryToken,
  ReviewRepositoryToken,
  SettingsRepositoryToken,
  ShopSettingsRepositoryToken,
  UserRepositoryToken,
} from './constants';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './application/services/auth.service';
import { Booking } from './domain/entities/booking.entity';
import { BookingRepository } from './infrastructure/persistence/booking.repository';
import { BookingService } from './application/services/booking.service';
import { BookingsController } from './presentation/controllers/bookings.controller';
import { Feedback } from './domain/entities/feedback.entity';
import { FeedbackController } from './presentation/controllers/feedback.controller';
import { FeedbackRepository } from './infrastructure/persistence/feedback.repository';
import { FeedbackService } from './application/services/feedback.service';
import { JwtAuthGuard } from './infrastructure/auth/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './infrastructure/auth/jwt.strategy';
import { MastersModule } from './masters.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Review } from './domain/entities/review.entity';
import { ReviewRepository } from './infrastructure/persistence/review.repository';
import { ReviewService } from './application/services/review.service';
import { ReviewsController } from './presentation/controllers/reviews.controller';
import { Setting } from './domain/entities/setting.entity';
import { SettingsController } from './presentation/controllers/settings.controller';
import { SettingsRepository } from './infrastructure/persistence/settings.repository';
import { SettingsService } from './application/services/settings.service';
import { ShopSettings } from './domain/entities/shop-settings.entity';
import { ShopSettingsController } from './presentation/controllers/shop-settings.controller';
import { ShopSettingsRepository } from './infrastructure/persistence/shop-settings.repository';
import { ShopSettingsService } from './application/services/shop-settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { UserRepository } from './infrastructure/persistence/user.repository';
import { UsersController } from './presentation/controllers/users.controller';
import { UsersModule } from './users.module';
import dataSource from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSource.options),
    TypeOrmModule.forFeature([
      Booking,
      Review,
      Setting,
      Feedback,
      ShopSettings,
      User,
    ]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    MastersModule,
  ],
  controllers: [
    BookingsController,
    ReviewsController,
    SettingsController,
    FeedbackController,
    ShopSettingsController,
    UsersController,
  ],
  providers: [
    BookingService,
    ReviewService,
    SettingsService,
    FeedbackService,
    ShopSettingsService,
    AuthService,
    JwtStrategy,
    JwtAuthGuard,
    { provide: BookingRepositoryToken, useClass: BookingRepository },
    { provide: ReviewRepositoryToken, useClass: ReviewRepository },
    { provide: SettingsRepositoryToken, useClass: SettingsRepository },
    { provide: FeedbackRepositoryToken, useClass: FeedbackRepository },
    { provide: ShopSettingsRepositoryToken, useClass: ShopSettingsRepository },
    { provide: UserRepositoryToken, useClass: UserRepository },
  ],
})
export class AppModule {}
