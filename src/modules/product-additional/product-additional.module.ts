import { Module } from '@nestjs/common';
import { ProductAdditionalService } from './product-additional.service';
import { ProductAdditionalController } from './product-additional.controller';

@Module({
  controllers: [ProductAdditionalController],
  providers: [ProductAdditionalService]
})
export class ProductAdditionalModule {}
