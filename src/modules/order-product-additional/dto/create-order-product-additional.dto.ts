import { ObjectId } from 'mongodb';

export class CreateOrderProductAdditionalDto {
  quantity: number;
  productAdditionalId: string | ObjectId;
}
