import { Module } from '@nestjs/common';
import { InsuranceService } from './insurance.service';

@Module({
  providers: [InsuranceService]
})
export class InsuranceModule {}
