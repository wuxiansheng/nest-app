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
import { Customer } from './pages/customer';
import { CustomerController } from './pages/crm/customer/customer.controller';
import { CustomerModule } from './pages/crm/customer/customer.module';
import { PrivateFundService } from './pages/finance/private-fund/private-fund.service';
import { PrivateFundController } from './pages/finance/private-fund/private-fund.controller';
import { PrivateFundModule } from './pages/finance/private-fund/private-fund.module';
import { PrivateFund } from './pages/private-fund';
import { UploadController } from './pages/upload/upload.controller';
import { UploadModule } from './pages/upload/upload.module';
import { Insurance } from './pages/insurance';
import { InsuranceController } from './pages/finance/insurance/insurance.controller';
import { InsuranceModule } from './pages/finance/insurance/insurance.module';
import { TrustController } from './pages/finance/trust/trust.controller';
import { TrustService } from './pages/finance/trust/trust.service';
import { TrustModule } from './pages/finance/trust/trust.module';
import { CustomerLostModule } from './pages/crm/customer-lost/customer-lost.module';
import { CommunicateRecordService } from './pages/crm/communicate-record/communicate-record.service';
import { CommunicateRecordController } from './pages/crm/communicate-record/communicate-record.controller';
import { CommunicateRecordModule } from './pages/crm/communicate-record/communicate-record.module';
@Module({
  imports: [ UserModule, LogModule, ArticleModule, RoleModule, FinanceModule, CustomerModule, PrivateFundModule, UploadModule, InsuranceModule, TrustModule, CustomerLostModule, CommunicateRecordModule],
  controllers: [AppController, ArticleController, RoleController, FinanceController, CustomerController, PrivateFundController, UploadController, InsuranceController, TrustController, CommunicateRecordController],
  providers: [AppService, Article, ArticleService, Role, RoleService, Finance, FinanceService, Customer, PrivateFundService, PrivateFund, Insurance, TrustService, CommunicateRecordService],
})
export class AppModule {}
