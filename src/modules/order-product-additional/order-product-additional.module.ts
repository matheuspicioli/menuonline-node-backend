import { Module } from '@nestjs/common';
import { OrderProductAdditionalService } from './order-product-additional.service';
import { OrderProductAdditionalController } from './order-product-additional.controller';

@Module({
  controllers: [OrderProductAdditionalController],
  providers: [OrderProductAdditionalService]
})
export class OrderProductAdditionalModule {}
