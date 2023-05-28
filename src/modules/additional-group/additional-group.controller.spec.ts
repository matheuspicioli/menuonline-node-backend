import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalGroupController } from './additional-group.controller';
import { AdditionalGroupService } from './additional-group.service';

describe('AdditionalGroupController', () => {
  let controller: AdditionalGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdditionalGroupController],
      providers: [AdditionalGroupService],
    }).compile();

    controller = module.get<AdditionalGroupController>(AdditionalGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
