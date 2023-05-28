import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongoClient } from "mongodb";
import Papr from "papr";

@Injectable()
export class MongoService {
  constructor(private readonly config: ConfigService) {
    this.initialize();
  }

  async initialize() {
    console.log(`database url: ${this.config.get<string>('databaseUrl')}`);
    const papr = new Papr();
    const connection = await MongoClient.connect(this.config.get<string>('databaseUrl'));
    papr.initialize(connection.db(this.config.get<string>('appName')));
  }
}