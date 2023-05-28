import { Injectable } from '@nestjs/common';
import { CreateProductAdditionalDto } from './dto/create-product-additional.dto';
import { UpdateProductAdditionalDto } from './dto/update-product-additional.dto';

@Injectable()
export class ProductAdditionalService {
  create(createProductAdditionalDto: CreateProductAdditionalDto) {
    return 'This action adds a new productAdditional';
  }

  findAll() {
    return `This action returns all productAdditional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productAdditional`;
  }

  update(id: number, updateProductAdditionalDto: UpdateProductAdditionalDto) {
    return `This action updates a #${id} productAdditional`;
  }

  remove(id: number) {
    return `This action removes a #${id} productAdditional`;
  }
}
