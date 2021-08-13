import { PurchaseService } from './purchase.service';
import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';

@Module({
    imports: [PurchaseModule],
    controllers: [PurchaseController],
    providers: [PurchaseService],
})
export class PurchaseModule {


}
