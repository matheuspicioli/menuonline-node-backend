import { ObjectId } from 'mongo';

export class CreateCostumerAddressDto {
  address: string;
  number: string;
  zipcode: string;
  complement: string | null;
  costumerId: string | ObjectId;
  cityId: string | ObjectId;
}
