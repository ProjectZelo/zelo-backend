import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateCardDto } from './dto/create-card.dto';
import { PurchaseService } from './purchase.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {

  }

  @Post('card')
  createCard(@Body('user') createCardDto: CreateCardDto) {
    return this.purchaseService.createCard(createCardDto);
  }

  @Post('payment')
  createPayment(@Body('user') createPaymentDto: CreatePaymentDto) {
    return this.purchaseService.createPayment(createPaymentDto);
  }
}
