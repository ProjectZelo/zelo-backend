import { VendorModule } from './modules/vendor/vendor.module';
import { UserModule } from './modules/user/user.module';
import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './modules/wallet/wallet.module';
import { PaymentModule } from './modules/payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'config/config.service';
import { HttpService } from '@nestjs/axios';
import { SharedModule } from './modules/shared/shared.module';
import { CardModule } from './modules/card/card.module';

@Module({
  imports: [
    PaymentModule,
    WalletModule,
    VendorModule,
    UserModule,
    SharedModule,
    CardModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {

  constructor(
    private readonly httpService: HttpService,
  ) { }

  public onModuleInit(): any {
    this.httpService.axiosRef.interceptors.request.use(function (config) {
      console.log(config)
      // Please don't tell my Typescript compiler...
      return config;
    });

  }


}
