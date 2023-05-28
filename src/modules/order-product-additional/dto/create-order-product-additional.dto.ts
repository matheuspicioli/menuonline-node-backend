import { ObjectId } from 'mongo';

export class CreateOrderProductAdditionalDto {
  quantity: number;
  productAdditionalId: string | ObjectId;
}
