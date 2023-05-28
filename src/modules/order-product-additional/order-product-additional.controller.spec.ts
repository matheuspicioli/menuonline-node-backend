import { Test, TestingModule } from '@nestjs/testing';
import { OrderProductAdditionalController } from './order-product-additional.controller';
import { OrderProductAdditionalService } from './order-product-additional.service';

describe('OrderProductAdditionalController', () => {
  let controller: OrderProductAdditionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderProductAdditionalController],
      providers: [OrderProductAdditionalService],
    }).compile();

    controller = module.get<OrderProductAdditionalController>(OrderProductAdditionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
