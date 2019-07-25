import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './pages/user/user.module';
import { LogModule } from './pages/sys/log/log.module';
import { ArticleModule } from './pages/social/article/article.module';
import { RoleModule } from './pages/rabc/role/role.module';
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
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { NoticeTypesController } from './pages/sys/notice-types/notice-types.controller';
import { NoticeTypesModule } from './pages/sys/notice-types/notice-types.module';
import { NoticeSettingsModule } from './pages/sys/notice-settings/notice-settings.module';
import { SpecialContentItemsController } from './pages/social/special-content-items/special-content-items.controller';
import { SpecialContentTypesController } from './pages/social/special-content-types/special-content-types.controller';
import { AttitudesController } from './pages/social/attitudes/attitudes.controller';
import { AttitudeRecordsController } from './pages/social/attitude-records/attitude-records.controller';
import { FavoritesController } from './pages/social/favorites/favorites.controller';
import { MessagesController } from './pages/social/messages/messages.controller';
import { MessageSessionsController } from './pages/social/message-sessions/message-sessions.controller';
import { PermissionsController } from './pages/rabc/permissions/permissions.controller';
import { PermissionItemsController } from './pages/rabc/permission-items/permission-items.controller';
import { ImpeachReportsController } from './pages/social/impeach-reports/impeach-reports.controller';
import { NavigationsController } from './pages/sys/navigations/navigations.controller';
import { EmailController } from './pages/sys/email/email.controller';
import { BankController } from './pages/crm/bank/bank.controller';
import { BankService } from './pages/crm/bank/bank.service';
import { BankModule } from './pages/crm/bank/bank.module';
import { DashboardModule } from './pages/crm/dashboard/dashboard.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'wxs3430569',
      database: 'nest',
      entities: [ join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
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
    NoticeTypesModule,
    NoticeSettingsModule,
    BankModule,
    DashboardModule,
  ],
  controllers: [AppController, NoticeTypesController, SpecialContentItemsController,
    SpecialContentTypesController, AttitudesController, AttitudeRecordsController, FavoritesController,
    MessagesController, MessageSessionsController, PermissionsController, PermissionItemsController,
    ImpeachReportsController, NavigationsController, EmailController, BankController],
  providers: [AppService, BankService],
})
export class AppModule {}
