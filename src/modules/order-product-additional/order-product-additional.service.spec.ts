import { Test, TestingModule } from '@nestjs/testing';
import { OrderProductAdditionalService } from './order-product-additional.service';

describe('OrderProductAdditionalService', () => {
  let service: OrderProductAdditionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderProductAdditionalService],
    }).compile();

    service = module.get<OrderProductAdditionalService>(OrderProductAdditionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
