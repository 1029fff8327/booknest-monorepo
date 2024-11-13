import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CreateUserDto } from 'src/application/dto/users/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/domain/entities/user.entity';
import { UsersService } from 'src/application/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService, // Добавляем usersService для работы с пользователями
  ) {}

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };

    // Генерация токена
    const token = this.jwtService.sign(payload);
    if (!token) {
      throw new InternalServerErrorException('Failed to generate token');
    }

    return {
      access_token: token,
      user, // Возвращаем объект пользователя
    };
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);

    // Генерация токена для нового пользователя
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    if (!token) {
      throw new InternalServerErrorException('Failed to generate token');
    }

    return {
      access_token: token,
      user, // Возвращаем нового пользователя
    };
  }
}
