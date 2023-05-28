import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditionalGroupDto } from './create-additional-group.dto';

export class UpdateAdditionalGroupDto extends PartialType(CreateAdditionalGroupDto) {}
