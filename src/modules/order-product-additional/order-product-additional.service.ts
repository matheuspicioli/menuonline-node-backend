import { Injectable } from '@nestjs/common';
import { CreateOrderProductAdditionalDto } from './dto/create-order-product-additional.dto';
import { UpdateOrderProductAdditionalDto } from './dto/update-order-product-additional.dto';

@Injectable()
export class OrderProductAdditionalService {
  create(createOrderProductAdditionalDto: CreateOrderProductAdditionalDto) {
    return 'This action adds a new orderProductAdditional';
  }

  findAll() {
    return `This action returns all orderProductAdditional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderProductAdditional`;
  }

  update(id: number, updateOrderProductAdditionalDto: UpdateOrderProductAdditionalDto) {
    return `This action updates a #${id} orderProductAdditional`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderProductAdditional`;
  }
}
