import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from 'src/application/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/infrastructure/auth/jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/persistence/user.repository';
import { UserRepositoryToken } from 'src/constants';
import { UsersController } from 'src/presentation/controllers/users.controller';
import { UsersService } from 'src/application/services/users.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    JwtStrategy,
    { provide: UserRepositoryToken, useClass: UserRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
