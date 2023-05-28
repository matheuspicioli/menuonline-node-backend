import { ObjectId } from 'mongo';

export class CreateProductAdditionalDto {
  additionalGroupId: string | ObjectId;
  productId: string | ObjectId;
}
