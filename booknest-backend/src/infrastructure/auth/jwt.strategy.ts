import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from 'src/domain/entities/user.entity';
import { UsersService } from 'src/application/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'), // Используем секретный ключ для проверки токена
    });
  }

  async validate(payload: any): Promise<User> {
    const user = await this.usersService.findOneByEmail(payload.username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Если пользователь найден, возвращаем его данные
  }
}
