import { CreatePaymentDto, CreatePaymentTxnDto } from './dto/create-payment.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {


  createPayment(paymentDetails: CreatePaymentDto): void {

    // TODO :  Call sandbox circle to create payment
    // TODO: call create payment txns after getting response from circle

  }

  createPaymentTxn(paymentTxnDetails: CreatePaymentTxnDto): void {

    // TODO :  Call sandbox circle to create payment

  }
}
