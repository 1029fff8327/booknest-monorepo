import { Injectable, Inject } from '@nestjs/common';
import { Master } from 'src/domain/entities/master.entity';
import { CreateMasterDto } from '../dto/master/create-master.dto';
import { UpdateMasterDto } from '../dto/master/update-master.dto';
import { IMasterRepository } from 'src/domain/repositories/master.repository.interface';
import { MasterRepositoryToken } from 'src/constants';

@Injectable()
export class MasterService {
  constructor(
    @Inject(MasterRepositoryToken)
    private readonly masterRepository: IMasterRepository,
  ) {}

  findAll(): Promise<Master[]> {
    return this.masterRepository.findAll();
  }

  findOne(id: string): Promise<Master> {
    return this.masterRepository.findOne(id);
  }

  create(createMasterDto: CreateMasterDto): Promise<Master> {
    const master = new Master();
    Object.assign(master, createMasterDto);
    return this.masterRepository.create(master);
  }

  async update(id: string, updateMasterDto: UpdateMasterDto): Promise<Master> {
    const master = await this.masterRepository.findOne(id);
    if (!master) throw new Error(`Master with ID ${id} not found`);
    Object.assign(master, updateMasterDto);
    return this.masterRepository.update(master);
  }

  delete(id: string): Promise<void> {
    return this.masterRepository.delete(id);
  }
}
