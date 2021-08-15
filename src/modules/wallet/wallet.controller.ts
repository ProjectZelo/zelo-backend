
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletService } from './wallet.service';

@Controller()
export class WalletController {
  constructor(private readonly walletService: WalletService) {

  }

  @Post('wallet')
  createWallet(@Body('user') createWalletDto: CreateWalletDto) {
    return this.walletService.createWallet(createWalletDto);
  }

  @Get('wallet')
  getWalletDetails() {
    return this.walletService.getWalletDetails();
  }
}
