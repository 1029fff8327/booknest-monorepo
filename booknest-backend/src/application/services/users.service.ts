import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/application/dto/users/create-user.dto';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from 'src/domain/repositories/user.repository.interface';
import { UserRepositoryToken } from 'src/constants';
import { UpdateUserDto } from 'src/application/dto/users/UpdateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: IUserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    return this.userRepository.create(user); // Создаем пользователя и сохраняем в БД
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneByEmail(email);
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user; // Возвращаем пользователя, если пароль совпадает
    }
    return null;
  }

  async update(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    console.log('Updating user with ID:', userId); // Логируем ID пользователя
    const user = await this.userRepository.findOneById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    console.log('Found user:', user); // Логируем найденного пользователя
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    return this.userRepository.save(user); // Сохранение обновленных данных
  }
}
