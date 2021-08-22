import { CreatePaymentDto, CreatePaymentTxnDto } from './dto/create-payment.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly purchaseService: PaymentService) {

  }

  @Post('payment')
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return this.purchaseService.createPayment(createPaymentDto);
  }

  /**
   * The below end point may not be called from outside. Payments txns will be recorded as payments are done
   * @param createPaymentTxn 
   * @returns 
   */
  @Post('payment')
  recordPaymentTxn(@Body('payment') createPaymentTxn: CreatePaymentTxnDto) {
    return this.purchaseService.createPaymentTxn(createPaymentTxn);
  }
}
