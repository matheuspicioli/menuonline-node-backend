import { PartialType } from '@nestjs/mapped-types';
import { CreateCostumerAddressDto } from './create-costumer-address.dto';

export class UpdateCostumerAddressDto extends PartialType(CreateCostumerAddressDto) {}
