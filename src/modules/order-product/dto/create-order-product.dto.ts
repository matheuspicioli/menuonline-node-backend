import { ObjectId } from 'mongodb';

export class CreateOrderProductDto {
  quantity: number;
  order_id: string | ObjectId;
  productId: string | ObjectId;
}
