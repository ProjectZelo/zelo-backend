import { WalletEntity } from './../wallet/wallet.entity';
import { PaymentService } from './payment.service';
import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './payment.entity';
import { SharedModule } from '../shared/shared.module';
import { WalletService } from '../wallet/wallet.service';

@Module({
    imports: [
        SharedModule,
        TypeOrmModule.forFeature([PaymentEntity, WalletEntity]),

    ],
    controllers: [PaymentController],
    providers: [PaymentService, WalletService],
})
export class PaymentModule {


}
