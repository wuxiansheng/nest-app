import { Module } from '@nestjs/common';
import { NoticeSettingsController } from './notice-settings.controller';

@Module({
  controllers: [NoticeSettingsController]
})
export class NoticeSettingsModule {}
