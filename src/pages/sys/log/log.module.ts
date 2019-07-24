import { MongoDbModule } from './../../../config/mongodb.module';
import { LogController } from './log.controller';
import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { logProviders } from './log.providers';

@Module({
  imports: [MongoDbModule],
  controllers: [LogController],
  providers: [LogService, ...logProviders],
})
export class LogModule {}
