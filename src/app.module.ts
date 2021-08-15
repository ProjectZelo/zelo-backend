import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [PurchaseModule, WalletModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
