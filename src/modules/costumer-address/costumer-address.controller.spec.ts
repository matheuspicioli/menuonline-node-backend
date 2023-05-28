import { Test, TestingModule } from '@nestjs/testing';
import { CostumerAddressController } from './costumer-address.controller';
import { CostumerAddressService } from './costumer-address.service';

describe('CostumerAddressController', () => {
  let controller: CostumerAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostumerAddressController],
      providers: [CostumerAddressService],
    }).compile();

    controller = module.get<CostumerAddressController>(CostumerAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
