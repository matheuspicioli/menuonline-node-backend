import { Injectable } from '@nestjs/common';
import { BaseDto } from './base.dto';
import { ObjectId } from 'mongo';

@Injectable()
export class BaseService {
  create(dto: BaseDto) {
    return 'This action adds a new additional';
  }

  findAll() {
    return `This action returns all additional`;
  }

  findOne(id: string | ObjectId) {
    return `This action returns a #${id} additional`;
  }

  update(id: string | ObjectId, dto: BaseDto) {
    return `This action updates a #${id} additional`;
  }

  remove(id: string | ObjectId) {
    return `This action removes a #${id} additional`;
  }
}
