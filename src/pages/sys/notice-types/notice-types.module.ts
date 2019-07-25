import { Module } from '@nestjs/common';
import { NoticeTypesService } from './notice-types.service';

@Module({
  providers: [NoticeTypesService]
})
export class NoticeTypesModule {}
