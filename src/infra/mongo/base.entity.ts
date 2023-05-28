import { ObjectId } from "mongodb";

export class BaseEntity {
  _id: string | ObjectId;
  createdAt: string;
  updatedAt: string;
}