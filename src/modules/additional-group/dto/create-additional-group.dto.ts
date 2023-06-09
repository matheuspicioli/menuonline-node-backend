import { ObjectId } from 'mongodb';

export class CreateAdditionalGroupDto {
  name: string;
  minQuantity: number;
  maxQuantity: number;
  userId: string | ObjectId
}
