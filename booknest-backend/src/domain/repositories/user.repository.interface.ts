import { User } from '../entities/user.entity';

export interface IUserRepository {
  findOneByEmail(email: string): Promise<User | undefined>;
  findOneById(id: number): Promise<User | undefined>; // Добавляем метод для поиска пользователя по ID
  create(user: User): Promise<User>;
  save(user: User): Promise<User>; // Добавляем метод для сохранения обновленного пользователя
}
