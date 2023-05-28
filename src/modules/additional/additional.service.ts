import { Injectable } from '@nestjs/common';
import { CreateAdditionalDto } from './dto/create-additional.dto';
import { UpdateAdditionalDto } from './dto/update-additional.dto';

@Injectable()
export class AdditionalService {
  create(createAdditionalGroupDto: CreateAdditionalDto) {
    return 'This action adds a new additionalGroup';
  }

  findAll() {
    return `This action returns all additionalGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalGroup`;
  }

  update(id: number, updateAdditionalGroupDto: UpdateAdditionalDto) {
    return `This action updates a #${id} additionalGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalGroup`;
  }
}
