import { ObjectId } from 'mongo';

export class CreateOrderDto {
  totalPrice: number;
  costumerId: string | ObjectId;
  comstumerAddressId: string | ObjectId;
}
