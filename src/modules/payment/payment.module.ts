import { PaymentService } from './payment.service';
import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './payment.entity';
import { SharedModule } from '../shared/shared.module';

@Module({
    imports: [
        SharedModule,
        TypeOrmModule.forFeature([PaymentEntity]),

    ],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule {


}
