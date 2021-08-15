import { PaymentService } from './payment.service';
import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';

@Module({
    imports: [],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule {


}
