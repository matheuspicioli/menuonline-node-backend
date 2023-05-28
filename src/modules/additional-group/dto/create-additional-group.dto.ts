import { ObjectId } from 'mongo';

export class CreateAdditionalGroupDto {
  name: string;
  minQuantity: number;
  maxQuantity: number;
  userId: string | ObjectId
}
