import { ObjectId } from 'mongodb';

export class CreateAdditionalDto {
  name: string;
  description: string;
  price: number;
  groupId: string | ObjectId;
}
