import { ObjectId } from 'mongodb';

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  productCategoryId: string | ObjectId;
}
