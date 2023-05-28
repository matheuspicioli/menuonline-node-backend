import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalGroupService } from './additional-group.service';

describe('AdditionalGroupService', () => {
  let service: AdditionalGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalGroupService],
    }).compile();

    service = module.get<AdditionalGroupService>(AdditionalGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
