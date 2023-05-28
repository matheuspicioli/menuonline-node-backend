import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductAdditionalService } from './product-additional.service';
import { CreateProductAdditionalDto } from './dto/create-product-additional.dto';
import { UpdateProductAdditionalDto } from './dto/update-product-additional.dto';

@Controller('product-additional')
export class ProductAdditionalController {
  constructor(private readonly productAdditionalService: ProductAdditionalService) {}

  @Post()
  create(@Body() createProductAdditionalDto: CreateProductAdditionalDto) {
    return this.productAdditionalService.create(createProductAdditionalDto);
  }

  @Get()
  findAll() {
    return this.productAdditionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productAdditionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductAdditionalDto: UpdateProductAdditionalDto) {
    return this.productAdditionalService.update(+id, updateProductAdditionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productAdditionalService.remove(+id);
  }
}
