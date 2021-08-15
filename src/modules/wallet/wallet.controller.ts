
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('wallet/:id')
  getWalletDetails(@Param() params) {
    return this.walletService.getWalletDetails(params.id);
  }
}
function Params() {
  throw new Error('Function not implemented.');
}

