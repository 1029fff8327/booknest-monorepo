import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IMasterRepository } from 'src/domain/repositories/master.repository.interface';
import { Master } from 'src/domain/entities/master.entity';

@Injectable()
export class MasterRepository implements IMasterRepository {
  constructor(
    @InjectRepository(Master)
    private mastersRepository: Repository<Master>,
  ) {}

  findAll(): Promise<Master[]> {
    return this.mastersRepository.find();
  }

  findOne(id: string): Promise<Master> {
    return this.mastersRepository.findOne({ where: { id: parseInt(id) } });
  }

  async create(master: Master): Promise<Master> {
    return this.mastersRepository.save(master);
  }

  async update(master: Master): Promise<Master> {
    return this.mastersRepository.save(master);
  }

  async delete(id: string): Promise<void> {
    await this.mastersRepository.delete(id);
  }
}
