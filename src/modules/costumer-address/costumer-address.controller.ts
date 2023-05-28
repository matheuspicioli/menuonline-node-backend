import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumerAddressService } from './costumer-address.service';
import { CreateCostumerAddressDto } from './dto/create-costumer-address.dto';
import { UpdateCostumerAddressDto } from './dto/update-costumer-address.dto';

@Controller('costumer-address')
export class CostumerAddressController {
  constructor(private readonly costumerAddressService: CostumerAddressService) {}

  @Post()
  create(@Body() createCostumerAddressDto: CreateCostumerAddressDto) {
    return this.costumerAddressService.create(createCostumerAddressDto);
  }

  @Get()
  findAll() {
    return this.costumerAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumerAddressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumerAddressDto: UpdateCostumerAddressDto) {
    return this.costumerAddressService.update(+id, updateCostumerAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumerAddressService.remove(+id);
  }
}
