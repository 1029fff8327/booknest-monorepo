import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Req,
  UnauthorizedException,
  UseGuards,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from 'src/application/services/users.service';
import { CreateUserDto } from 'src/application/dto/users/create-user.dto';
import { AuthService } from 'src/application/services/auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginUserDto } from 'src/application/dto/users/login-user.dto';
import { JwtAuthGuard } from 'src/infrastructure/auth/jwt-auth.guard';
import { UpdateUserDto } from 'src/application/dto/users/UpdateUserDto';

@ApiTags('auth')
@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully registered.',
  })
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return this.authService.login(user);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully logged in.',
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiResponse({
    status: 200,
    description: 'The current authenticated user',
  })
  async getMe(@Req() req) {
    return req.user; // Возвращаем информацию о текущем пользователе
  }

  @Put('update')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update user account settings' })
  @ApiResponse({
    status: 200,
    description: 'User account has been successfully updated',
  })
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Req() req) {
    try {
      console.log('Update user:', req.user.id, updateUserDto); // Логируем данные пользователя и запрос
      return this.usersService.update(req.user.id, updateUserDto);
    } catch (error) {
      console.error('Error updating user:', error); // Логируем ошибку
      throw new InternalServerErrorException('Failed to update user settings');
    }
  }
}
