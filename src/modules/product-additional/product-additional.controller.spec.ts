import { Test, TestingModule } from '@nestjs/testing';
import { ProductAdditionalController } from './product-additional.controller';
import { ProductAdditionalService } from './product-additional.service';

describe('ProductAdditionalController', () => {
  let controller: ProductAdditionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductAdditionalController],
      providers: [ProductAdditionalService],
    }).compile();

    controller = module.get<ProductAdditionalController>(ProductAdditionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
