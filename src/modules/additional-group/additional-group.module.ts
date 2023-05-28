import { Module } from '@nestjs/common';
import { AdditionalGroupService } from './additional-group.service';
import { AdditionalGroupController } from './additional-group.controller';

@Module({
  controllers: [AdditionalGroupController],
  providers: [AdditionalGroupService]
})
export class AdditionalGroupModule {}
