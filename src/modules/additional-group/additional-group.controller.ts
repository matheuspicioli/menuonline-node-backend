import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdditionalGroupService } from './additional-group.service';
import { CreateAdditionalGroupDto } from './dto/create-additional-group.dto';
import { UpdateAdditionalGroupDto } from './dto/update-additional-group.dto';

@Controller('additional-group')
export class AdditionalGroupController {
  constructor(private readonly additionalGroupService: AdditionalGroupService) {}

  @Post()
  create(@Body() createAdditionalGroupDto: CreateAdditionalGroupDto) {
    return this.additionalGroupService.create(createAdditionalGroupDto);
  }

  @Get()
  findAll() {
    return this.additionalGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdditionalGroupDto: UpdateAdditionalGroupDto) {
    return this.additionalGroupService.update(+id, updateAdditionalGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionalGroupService.remove(+id);
  }
}
