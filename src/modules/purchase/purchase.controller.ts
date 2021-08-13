import { PurchaseService } from './purchase.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {

  }

  @Get('purchase')
  getHello(): string {
    return this.PurchaseService.getHello();
  }
}
