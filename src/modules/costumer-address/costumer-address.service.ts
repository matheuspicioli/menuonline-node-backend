import { Injectable } from '@nestjs/common';
import { CreateCostumerAddressDto } from './dto/create-costumer-address.dto';
import { UpdateCostumerAddressDto } from './dto/update-costumer-address.dto';

@Injectable()
export class CostumerAddressService {
  create(createCostumerAddressDto: CreateCostumerAddressDto) {
    return 'This action adds a new costumerAddress';
  }

  findAll() {
    return `This action returns all costumerAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costumerAddress`;
  }

  update(id: number, updateCostumerAddressDto: UpdateCostumerAddressDto) {
    return `This action updates a #${id} costumerAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} costumerAddress`;
  }
}
