import { ObjectId } from 'mongo';

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  productCategoryId: string | ObjectId;
}
