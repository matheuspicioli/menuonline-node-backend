import { Module } from '@nestjs/common';
import { BaseService } from './base.service';
import { AdditionalModule } from './modules/additional/additional.module';
import { AdditionalGroupModule } from './modules/additional-group/additional-group.module';
import { CostumerModule } from './modules/costumer/costumer.module';
import { CostumerAddressModule } from './modules/costumer-address/costumer-address.module';
import { OrderModule } from './modules/order/order.module';
import { OrderProductModule } from './modules/order-product/order-product.module';
import { OrderProductAdditionalModule } from './modules/order-product-additional/order-product-additional.module';
import { ProductModule } from './modules/product/product.module';
import { ProductAdditionalModule } from './modules/product-additional/product-additional.module';
import { ProductCategoryModule } from './modules/product-category/product-category.module';

@Module({
  imports: [
    AdditionalModule,
    AdditionalGroupModule,
    CostumerModule,
    CostumerAddressModule,
    OrderModule,
    OrderProductModule,
    OrderProductAdditionalModule,
    ProductModule,
    ProductAdditionalModule,
    ProductCategoryModule,
  ],
  controllers: [],
  providers: [BaseService],
})
export class AppModule {}
