import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderProductAdditionalDto } from './create-order-product-additional.dto';

export class UpdateOrderProductAdditionalDto extends PartialType(CreateOrderProductAdditionalDto) {}
