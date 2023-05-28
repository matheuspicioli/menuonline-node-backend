import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [MongoService],
  
})
export class MongoModule {}
