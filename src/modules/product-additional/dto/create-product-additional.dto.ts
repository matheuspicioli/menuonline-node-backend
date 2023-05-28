import { ObjectId } from 'mongodb';

export class CreateProductAdditionalDto {
  additionalGroupId: string | ObjectId;
  productId: string | ObjectId;
}
