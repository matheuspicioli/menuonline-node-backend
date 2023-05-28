import { Module } from '@nestjs/common';
import { CostumerAddressService } from './costumer-address.service';
import { CostumerAddressController } from './costumer-address.controller';

@Module({
  controllers: [CostumerAddressController],
  providers: [CostumerAddressService]
})
export class CostumerAddressModule {}
