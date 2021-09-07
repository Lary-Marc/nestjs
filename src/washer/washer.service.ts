import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWasherDto } from './dto/create-washer.dto';
import { UpdateWasherDto } from './dto/update-washer.dto';
import { Washer } from './entities/washer.entity';

@Injectable()
export class WasherService {
  constructor(@InjectRepository(Washer) private readonly repository: Repository<Washer>){}
  create(createWasherDto: CreateWasherDto): Promise<Washer> {
const washer = this.repository.create(createWasherDto);
    return this.repository.save(washer);
  }

  findAll(): Promise<Washer[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} washer`;
  }

  update(id: number, updateWasherDto: UpdateWasherDto) {
    return `This action updates a #${id} washer`;
  }

  remove(id: number) {
    return `This action removes a #${id} washer`;
  }
}
