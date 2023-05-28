import { ObjectId } from 'mongo';

export class CreateAdditionalDto {
  name: string;
  description: string;
  price: number;
  groupId: string | ObjectId;
}
