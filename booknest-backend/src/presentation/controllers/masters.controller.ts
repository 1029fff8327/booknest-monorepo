import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterService } from 'src/application/services/masters.service';
import { CreateMasterDto } from 'src/application/dto/master/create-master.dto';
import { UpdateMasterDto } from 'src/application/dto/master/update-master.dto';

@Controller('masters')
export class MastersController {
  constructor(private readonly masterService: MasterService) {}

  @Get()
  findAll() {
    return this.masterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(id);
  }

  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(id, updateMasterDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.masterService.delete(id);
  }
}
