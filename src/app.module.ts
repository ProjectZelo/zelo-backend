import { HttpInterceptorModule } from './modules/http-interceptor/http-interceptor.module';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './modules/wallet/wallet.module';
import { PaymentModule } from './modules/payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'config/config.service';

@Module({
  imports: [
    PaymentModule,
    WalletModule,
    UserModule,
    HttpInterceptorModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
