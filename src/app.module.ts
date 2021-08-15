import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './modules/wallet/wallet.module';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [PaymentModule, WalletModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
