import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateCardDto } from './dto/create-card.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService {

  createCard(cardDetails: CreateCardDto): void {

    // TODO :  Call sandbox circle to create card for the user

  }

  createPayment(paymentDetails: CreatePaymentDto): void {

    // TODO :  Call sandbox circle to create payment

  }
}
