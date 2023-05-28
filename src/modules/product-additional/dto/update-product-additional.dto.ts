import { PartialType } from '@nestjs/mapped-types';
import { CreateProductAdditionalDto } from './create-product-additional.dto';

export class UpdateProductAdditionalDto extends PartialType(CreateProductAdditionalDto) {}
