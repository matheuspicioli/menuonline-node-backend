import { ObjectId } from 'mongodb';

export class CreateOrderDto {
  totalPrice: number;
  costumerId: string | ObjectId;
  comstumerAddressId: string | ObjectId;
}
