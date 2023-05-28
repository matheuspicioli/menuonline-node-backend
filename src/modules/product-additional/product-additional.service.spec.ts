import { Test, TestingModule } from '@nestjs/testing';
import { ProductAdditionalService } from './product-additional.service';

describe('ProductAdditionalService', () => {
  let service: ProductAdditionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAdditionalService],
    }).compile();

    service = module.get<ProductAdditionalService>(ProductAdditionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
