import { Test, TestingModule } from '@nestjs/testing';
import { CostumerAddressService } from './costumer-address.service';

describe('CostumerAddressService', () => {
  let service: CostumerAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostumerAddressService],
    }).compile();

    service = module.get<CostumerAddressService>(CostumerAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
