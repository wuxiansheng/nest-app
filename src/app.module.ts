import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './pages/user/user.module';
import { LogModule } from './pages/sys/log/log.module';
import { ArticleModule } from './pages/social/article/article.module';
import { RoleModule } from './pages/role/role.module';
import { FinanceModule } from './pages/finance/finance.module';
import { CustomerModule } from './pages/crm/customer/customer.module';
import { PrivateFundModule } from './pages/finance/private-fund/private-fund.module';
import { UploadModule } from './pages/sys/upload/upload.module';
import { InsuranceModule } from './pages/finance/insurance/insurance.module';
import { TrustModule } from './pages/finance/trust/trust.module';
import { CustomerLostModule } from './pages/crm/customer-lost/customer-lost.module';
import { CommunicateRecordModule } from './pages/crm/communicate-record/communicate-record.module';
import { CommentsModule } from './pages/social/comments/comments.module';
import { TagsModule } from './pages/social/tags/tags.module';
import { NoticeModule } from './pages/sys/notice/notice.module';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    UserModule,
    LogModule,
    ArticleModule,
    RoleModule,
    FinanceModule,
    CustomerModule,
    PrivateFundModule,
    UploadModule,
    InsuranceModule,
    TrustModule,
    CustomerLostModule,
    CommunicateRecordModule,
    CommentsModule,
    TagsModule,
    NoticeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
