import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderProductAdditionalService } from './order-product-additional.service';
import { CreateOrderProductAdditionalDto } from './dto/create-order-product-additional.dto';
import { UpdateOrderProductAdditionalDto } from './dto/update-order-product-additional.dto';

@Controller('order-product-additional')
export class OrderProductAdditionalController {
  constructor(private readonly orderProductAdditionalService: OrderProductAdditionalService) {}

  @Post()
  create(@Body() createOrderProductAdditionalDto: CreateOrderProductAdditionalDto) {
    return this.orderProductAdditionalService.create(createOrderProductAdditionalDto);
  }

  @Get()
  findAll() {
    return this.orderProductAdditionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderProductAdditionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderProductAdditionalDto: UpdateOrderProductAdditionalDto) {
    return this.orderProductAdditionalService.update(+id, updateOrderProductAdditionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductAdditionalService.remove(+id);
  }
}
