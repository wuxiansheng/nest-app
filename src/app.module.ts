import { LogService } from './pages/log/log.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './pages/user/user.controller';
import { UserService } from './pages/user/user.service';
import { UserModule } from './pages/user/user.module';
import { LogController } from './pages/log/log.controller';
import { LogModule } from './pages/log/log.module';
@Module({
  imports: [ UserModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
