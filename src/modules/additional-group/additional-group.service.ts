import { Injectable } from '@nestjs/common';
import { CreateAdditionalGroupDto } from './dto/create-additional-group.dto';
import { UpdateAdditionalGroupDto } from './dto/update-additional-group.dto';

@Injectable()
export class AdditionalGroupService {
  create(createAdditionalGroupDto: CreateAdditionalGroupDto) {
    return 'This action adds a new additionalGroup';
  }

  findAll() {
    return `This action returns all additionalGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalGroup`;
  }

  update(id: number, updateAdditionalGroupDto: UpdateAdditionalGroupDto) {
    return `This action updates a #${id} additionalGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalGroup`;
  }
}
