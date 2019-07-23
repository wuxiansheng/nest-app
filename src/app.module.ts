import { LogService } from './pages/log/log.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './pages/user/user.controller';
import { UserService } from './pages/user/user.service';
import { UserModule } from './pages/user/user.module';
import { LogController } from './pages/log/log.controller';
import { LogModule } from './pages/log/log.module';
import { ArticleController } from './pages/article/article.controller';
import { Article } from './pages/article';
import { ArticleService } from './pages/article/article.service';
import { ArticleModule } from './pages/article/article.module';
import { RoleController } from './pages/role/role.controller';
import { Role } from './pages/role';
import { RoleService } from './pages/role/role.service';
import { RoleModule } from './pages/role/role.module';
import { Finance } from './pages/finance';
import { FinanceController } from './pages/finance/finance.controller';
import { FinanceService } from './pages/finance/finance.service';
import { FinanceModule } from './pages/finance/finance.module';
@Module({
  imports: [ UserModule, LogModule, ArticleModule, RoleModule, FinanceModule],
  controllers: [AppController, ArticleController, RoleController, FinanceController],
  providers: [AppService, Article, ArticleService, Role, RoleService, Finance, FinanceService],
})
export class AppModule {}
